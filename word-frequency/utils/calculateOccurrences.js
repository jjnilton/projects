const calculateOccurrences = (text) => {
  let cleanedText = text.trim();
  cleanedText = cleanedText.replace(/\n/g, " ");
  cleanedText = cleanedText.replace(/[,.!?]/g, "");
  const words = cleanedText.split(" ");
  const occurrences = words.reduce((acc, curr) => {
    return curr && (acc[curr] = acc[curr] + 1 || 1), acc;
  }, {});

  return occurrences;
};

export default calculateOccurrences;
