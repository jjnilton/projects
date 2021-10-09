import calculateOccurrences from "../../utils/calculateOccurrences";

export default function handler(req, res) {
  //five five five five five one two two three three three four four four four

  const occurrences = calculateOccurrences(req.query.text);

  const sort = {
    type: req.query.sort || "number",
    ascending: req.query.ascending || "false",
  };

  const sortedOccurrences = (input, type, ascending) => {
    console.log(type, ascending);
    let sorted = input;
    if (type === "word" && ascending === "false") {
      sorted = Object.entries(occurrences).sort((a, b) =>
        a[0] > b[0] ? -1 : 1
      );
    } else if (type === "word") {
      sorted = Object.entries(occurrences).sort((a, b) =>
        a[0] < b[0] ? -1 : 1
      );
    } else if (type === "number" && ascending === "true") {
      sorted = Object.entries(occurrences).sort((a, b) =>
        a[1] < b[1] ? -1 : 1
      );
    } else {
      sorted = Object.entries(occurrences).sort((a, b) =>
        a[1] > b[1] ? -1 : 1
      );
    }
    return Object.fromEntries(sorted);
  };

  const output = sortedOccurrences(req.query.text, sort.type, sort.ascending);

  res.status(200).json({ data: output });
}
