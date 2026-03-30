export const formatDate = (date?: string | Date | null) => {
  if (!date) return "-";

  const parsed = new Date(date);
  if (isNaN(parsed.getTime())) return "-";

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed);
};
