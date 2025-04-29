

const initialValues = ()=>{ email:   ''; name: '';lastname: ''; password: ''; confirmPassword: '' }
export {initialValues}
export const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };