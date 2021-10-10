const calculateOccurrences = (text) => {
  const cleanedText = text.trim().replace(/[,.!?]/g, "");
  const words = cleanedText.split(" ")
  const occurrences = words.reduce((acc, curr) => {
    return (acc[curr] = acc[curr] + 1 || 1), acc;
  }, {});
  return occurrences;
};

export default calculateOccurrences;
