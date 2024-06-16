export const renderParagraphs = (text) => {
  if (!text) return null;
  const paragraphs = text.split("\n\n");
  return paragraphs.map((paragraph, index) => (
    <p key={index} className="my-5 lg:text-lg sm:text-md text-md">
      {paragraph}
    </p>
  ));
};

export const renderRequirements = (text) => {
  if (!text) return null;
  const reqs = text.split(".").filter((req) => req.trim() !== "");
  return reqs.map((req, index) => (
    <li key={index} className="my-5">
      {req}
    </li>
  ));
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const formatQuestions = (questions) => {
  const formattedQuestions = questions
    .split("?")
    .filter((q) => q.trim() !== "")
    .map((q) => q.trim() + "?");
  return formattedQuestions;
};
