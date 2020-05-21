/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// const NavBar = (props) => {
//   return (
//     <div
//       css={css`
//         ${'' /* padding: 0.75rem; */}
//         background-color: ${props.bg || 'white'};
//         border-bottom: ${props.border || '#f5f5f5'};
//         position: absolute;
//         top: -40px;
//         right: 10px;
//         color: #000;
//         font-size: 13px;
//         a {
//           text-decoration: none;
//           color: #000;
//           padding-left: 10px;
//           &:hover{color:#029E74}
//         }
//       `}
//       {...props}
//     >
//       {props.children}
//     </div>
//   );
// };

export const Layout = (props) => {
  return (
    <div
      css={css`
        position: relative;
        margin: 0;
        padding: 40px 0;
        ${'' /* height: calc(100vh - 259px); */}
        border-top: 1px solid #ccc;
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};
