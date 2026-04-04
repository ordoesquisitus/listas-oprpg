import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card bg-dark border-secondary shadow-lg">
            <div className="card-body text-center py-5">
              <div className="mb-4">
                <i
                  className="bi bi-exclamation-triangle text-warning"
                  style={{ fontSize: '5rem' }}
                ></i>
              </div>
              <h1 className="display-1 fw-bold text-light">404</h1>
              <h2 className="mb-3 text-light">Page Not Found</h2>
              <p className="lead text-light mb-4">
                Sorry, the page you are looking for doesn't exist or has been
                moved.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <Link to="/" className="btn btn-primary btn-lg px-4">
                  <i className="bi bi-house-door me-2"></i>
                  Go Back Home
                </Link>
                <button
                  className="btn btn-outline-secondary btn-lg px-4"
                  onClick={() => window.history.back()}
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
