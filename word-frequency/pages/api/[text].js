import calculateOccurrences from "../../utils/calculateOccurrences"

export default function handler(req, res) {

  const occurrences = calculateOccurrences(req.query.text)
  console.log(occurrences)

  res.status(200).json({data: occurrences })
}
