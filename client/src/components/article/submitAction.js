const submitAction = (data) => {
  const {
    imageUrl,
    title,
    body,
    description,
  } = data;
  const formData = new FormData();
  formData.append('image', imageUrl);
  formData.append('description', description.trim());
  formData.append('title', title.trim());
  formData.append('body', body.trim());
  return formData;
};

export default submitAction;
