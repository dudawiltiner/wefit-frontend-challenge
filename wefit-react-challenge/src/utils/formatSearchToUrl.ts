export function formatSearchToUrl(phrase: string) {
  const searchWithOutSpace = phrase?.trimEnd().trimStart();
  const formattedSearch = searchWithOutSpace?.replace(' ', '+').trim();

  return formattedSearch;
}
