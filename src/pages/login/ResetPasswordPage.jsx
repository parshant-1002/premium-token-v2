import React from 'react';
import { useParams } from 'react-router-dom';

const ResetPasswordPage = () => {
  const { token } = useParams();
  // ... reset password logic

  return (
    <div>
      {/* ... reset password form */}
    </div>
  );
};

export default ResetPasswordPage;
