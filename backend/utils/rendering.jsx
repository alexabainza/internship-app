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
