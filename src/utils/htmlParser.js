import React from 'react';
import ReactDOMServer from 'react-dom/server';
// import PropTypes from 'prop-types';
import _ from 'lodash';
// import classNames from 'classnames';
import sanitizeHtml from 'sanitize-html';
import embedjs from 'embedjs';
import jsonParser from './jsonParser';
import sanitizeConfig from '../vendors/SanitizeConfig';
import { imageRegex, dtubeImageRegex, rewriteRegex } from '../helpers/regexHelpers';
import HtmlReady from '../vendors/HtmlReady';
import improve from '../helpers/improve';
import PostFeedEmbed from './PostFeedEmbed';
import remarkable from './remarkable';

const htmlParser = {
  getLinkEmbed: link => {
    const embed = embedjs.get(link, { width: '100%', height: 400, autoplay: false });

    if (_.isUndefined(embed)) {
      return {
        provider_name: '',
        thumbnail: '',
        embed: link,
      }
    }

    return embed;
  },

  getHtml: ({ body, jsonMetadata = {}, returnType = 'Object', options = {} }) => {
    const parsedJsonMetadata = jsonParser.toJson(jsonMetadata);
    parsedJsonMetadata.image = parsedJsonMetadata.image || [];

    let parsedBody = body.replace(/<!--([\s\S]+?)(-->|$)/g, '(html comment removed: $1)');

    parsedBody.replace(imageRegex, img => {
      if (_.filter(parsedJsonMetadata.image, i => i.indexOf(img) !== -1).length === 0) {
        parsedJsonMetadata.image.push(img);
      }
    });

    parsedBody = improve(parsedBody);
    parsedBody = remarkable.render(parsedBody);

    const htmlReadyOptions = { mutate: true, resolveIframe: returnType === 'text' };
    parsedBody = HtmlReady(parsedBody, htmlReadyOptions).html;
    parsedBody = parsedBody.replace(dtubeImageRegex, '');

    if (options.rewriteLinks) {
      parsedBody = parsedBody.replace(rewriteRegex, (match, p1) => `"${p1 || '/'}"`);
    }

    parsedBody = sanitizeHtml(
      parsedBody,
      sanitizeConfig({
        secureLinks: options.secureLinks,
      }),
    );
    if (returnType === 'text') {
      return parsedBody;
    }

    const sections = [];

    const splittedBody = parsedBody.split('~~~ embed:');
    for (let i = 0; i < splittedBody.length; i += 1) {
      let section = splittedBody[i];

      const match = section.match(/^([A-Za-z0-9_-]+) ([A-Za-z]+) (\S+) ~~~/);
      if (match && match.length >= 4) {
        const id = match[1];
        const type = match[2];
        const link = match[3];
        const embed = htmlParser.getLinkEmbed(link);
        sections.push(
          ReactDOMServer.renderToString(<PostFeedEmbed key={`embed-a-${i}`} inPost embed={embed} />),
        );
        section = section.substring(`${id} ${type} ${link} ~~~`.length);
      }
      if (section !== '') {
        sections.push(section);
      }
    }
    // eslint-disable-next-line react/no-danger
    return <div dangerouslySetInnerHTML={{ __html: sections.join('') }} />;
  },
};

export default htmlParser;