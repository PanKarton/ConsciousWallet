import React from 'react';
import BirdIcon from 'components/atoms/BirdIcon/BirdIcon';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import { StyledOverlay, StyledWrapper } from './LogoutConfirmation.styles';
import { useAuth } from 'providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LogoutConfirmation = () => {
  const { handleLogOut } = useAuth();
  const navigate = useNavigate();
  return (
    <StyledOverlay>
      <StyledWrapper>
        <BirdIcon className="bird-icon" />
        <h2 className="logout-header">
          <span>Log out of Twitter?</span>
        </h2>
        <div className="logout-message">
          <span>You can always log back in at any time you want. Come back to visit us, we can not wait to see you again!</span>
        </div>
        <CylinderButton bgColor="black" textColor="white" onClick={handleLogOut}>
          Log out
        </CylinderButton>
        <CylinderButton onClick={() => navigate('/home')}>Cancel</CylinderButton>
      </StyledWrapper>
    </StyledOverlay>
  );
};

export default LogoutConfirmation;
