const NotFound = () => {
  return (
    <div
      style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ fontSize: '6rem', margin: '0', color: '#dc3545' }}>404</h1>
      <h2 style={{ fontSize: '2rem', margin: '1rem 0', color: '#333' }}>
        Page Not Found
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
    </div>
  );
};

export default NotFound;
