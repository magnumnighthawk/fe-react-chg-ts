const endpoints = {
  lenders: 'api/lenders/:lenderName',
};

export const postSubmission = async (lenderName: string, data: any) => {
  const response = await fetch(
    endpoints.lenders.replace(':lenderName', lenderName),
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    },
  );

  const responseBody = await response.json();
  if (!response.ok) {
    throw Error(responseBody?.message);
  }

  return responseBody;
};
