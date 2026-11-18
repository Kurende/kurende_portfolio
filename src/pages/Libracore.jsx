import libraryLogo from '../assets/LibraCore_white.png';

export default function Libracore() {
    return (
        <>
            <div className="libracore-container p-4" >
                {/* Header Section */}
                <div className="d-flex align-items-center gap-3 mb-2">
                    <img src={libraryLogo} alt="LibraCore logo" className="logo-img" width="60" />
                    <h1 className="mb-0">LibraCore</h1>
                </div>
                
                <h2 className="text-muted h4 mb-3">Library Management System</h2>

                {/* Tech Stack Badges */}
                <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-success">Qt 6.x</span>
                    <span className="badge bg-primary">C++17</span>
                    <span className="badge bg-info text-dark">SQLite 3</span>
                    <span className="badge bg-secondary">Platform: Windows</span>
                    <span className="badge bg-dark">License: LGPL v3</span>
                </div>

                {/* Overview Description */}
                <p className="lead">
                    LibraCore is an offline-first school library management system built with Qt, C++, and SQLite. It is designed for schools that need a simple desktop application for managing books, learners, borrowing, returns, lost books, payments, reporting, and operational maintenance without requiring a server or constant internet access.
                </p>

                <hr className="my-4" />

                {/* Core Features */}
                <h3 className="mb-3">Core Features</h3>
                <div className="row g-3 mb-4">
                    <div className="col-md-6">
                        <div className="card h-100 p-3 shadow-sm">
                            <h5 className="text-primary">Book Management</h5>
                            <ul className="mb-0 small">
                                <li>Track each physical copy by a unique book code while sharing ISBNs.</li>
                                <li>Support book states: Available, Borrowed, Lost, and Retired.</li>
                                <li>Validate ISBN, title, author, subject, grade, price, and status before saving.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 p-3 shadow-sm">
                            <h5 className="text-primary">Learner Management</h5>
                            <ul className="mb-0 small">
                                <li>Add, edit, search, and view learner profiles with borrower history.</li>
                                <li>Normalize names, surnames, and titles to title case automatically.</li>
                                <li>Prevent deletion of learners with active transactions or payment records.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 p-3 shadow-sm">
                            <h5 className="text-primary">Borrowing & Returns</h5>
                            <ul className="mb-0 small">
                                <li>Enforce grade matching, active overdue restrictions, and single-copy limits.</li>
                                <li>Process returns in batches and automatically mark unpresented books as lost.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 p-3 shadow-sm">
                            <h5 className="text-primary">Administration & Security</h5>
                            <ul className="mb-0 small">
                                <li>Role-based permissions for Admin, Librarian, and Finance users.</li>
                                <li>Audit log integrity tracking with hash-chain verification.</li>
                                <li>Secure password hashing using PBKDF2-SHA256.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Author & Version Info */}
                <div className="card bg-light p-3 mt-4">
                    <h5 className="mb-2">Project Details</h5>
                    <p className="mb-1"><strong>Author:</strong> Kabelo Bruce Sebashe (University of South Africa - UNISA)</p>
                    <p className="mb-0"><strong>Version:</strong> 1.0.0 (Last updated: July 2026)</p>
                </div>
            </div>
        </>
    );
}
