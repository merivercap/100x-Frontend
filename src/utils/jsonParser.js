const jsonParser = {
  toJson: input => {
    try {
      /** if input is valid argument */
      return JSON.parse(input);
    } catch (error) {
      /** if input is not valid argument */
      return {};
    }
  },

  epochToUTC: epochTimestamp => new Date(0).setUTCSeconds(epochTimestamp),
};

export default jsonParser;
