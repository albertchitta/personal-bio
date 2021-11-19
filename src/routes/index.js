// import React from 'react';
// import PropTypes from 'prop-types';
// import AdminRoutes from './AdminRoutes';
// import PublicRoutes from './PublicRoutes';

// export default function Routes({ user, technology, setEditTechnology }) {
//   return (
//     <>
//       {user ? (
//         <AdminRoutes
//           user={user}
//           technology={technology}
//           setEditTechnology={setEditTechnology}
//         />
//       ) : (
//         <PublicRoutes user={user} />
//       )}
//     </>
//   );
// }

// Routes.propTypes = {
//   technology: PropTypes.shape({
//     image: PropTypes.string,
//     name: PropTypes.string,
//     firebaseKey: PropTypes.string,
//   }),
//   setEditTechnology: PropTypes.func.isRequired,
//   user: PropTypes.shape({
//     uid: PropTypes.string,
//   }).isRequired,
// };

// Routes.defaultProps = { technology: {} };
