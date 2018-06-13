export const handleInputChange = (self, field) => {
  return e => self.setState({ [field]: e.target.value });
};