import styled from "styled-components";

const StyledNotification = styled.p`
text-align:center;
color:green;
font-size:14px;
`;

export const Notification = ({ message }) => {
    return (
        <div>
            <StyledNotification>{message}</StyledNotification>
        </div>
    )
    
};