import ebenCorePosIllustration from '../assets/ebencore-pos.svg';

export default function EbenCorePOS() {
    return (
        <div className="libracore-container p-4">

            {/* Header */}
            <div className="d-flex align-items-center gap-3 mb-2">
                <img
                    src={ebenCorePosIllustration}
                    alt="Illustration of an EbenCore point-of-sale terminal"
                    className="logo-img"
                    width="80"
                />
                <h1 className="mb-0">EbenCore POS</h1>
            </div>

            <h2 className="text-muted h4 mb-3">
                Spaza Shop Point of Sale System
            </h2>

            {/* Technology Badges */}
            <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge bg-success">Qt 6.x</span>
                <span className="badge bg-primary">C++17</span>
                <span className="badge bg-info text-dark">SQLite 3</span>
                <span className="badge bg-secondary">Platform: Windows</span>
                <span className="badge bg-dark">Offline-first</span>
            </div>

            {/* Overview */}
            <p className="lead">
                EbenCore POS is a point-of-sale application concept
                designed for South African spaza shops. The project
                is informed by challenges identified through discussions
                with a local spaza shop owner, particularly around
                sales tracking, financial visibility and administrative
                record-keeping.
            </p>

            <p>
                The goal is to develop an affordable, practical desktop
                solution that combines checkout operations, inventory
                management, purchasing and sales reporting in one system.
                It is being designed to operate offline, reducing
                dependence on continuous internet connectivity.
            </p>

            <hr className="my-4" />

            {/* Business Background */}
            <h3 className="mb-3">Business Background & Challenges</h3>

            <p>
                Initial requirements were gathered from a spaza shop
                owner to understand the operational and administrative
                challenges experienced by a small retail business.
            </p>

            <div className="row g-3 mb-4">

                <div className="col-md-6">
                    <div className="card h-100 p-3 shadow-sm">
                        <h5 className="text-primary">
                            Administrative Challenges
                        </h5>
                        <ul className="mb-0 small">
                            <li>
                                The business previously relied on an
                                accountant to assist with paperwork
                                and SARS submissions.
                            </li>
                            <li>
                                After the accountant became unavailable,
                                outstanding SARS submissions resulted
                                in financial obligations.
                            </li>
                            <li>
                                UIF submission difficulties contributed
                                to the employer being deregistered with
                                the Department of Employment and Labour.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 p-3 shadow-sm">
                        <h5 className="text-primary">
                            Sales & Financial Visibility
                        </h5>
                        <ul className="mb-0 small">
                            <li>
                                The shop already uses a POS machine
                                for processing transactions.
                            </li>
                            <li>
                                The existing machine does not provide
                                the owner with the daily sales and
                                monthly profit/loss calculations
                                they need.
                            </li>
                            <li>
                                The current arrangement includes a
                                maintenance cost of approximately
                                R10 per day.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 p-3 shadow-sm">
                        <h5 className="text-primary">
                            Invoicing & Record-Keeping
                        </h5>
                        <ul className="mb-0 small">
                            <li>
                                The business needs invoices to support
                                its SARS eFiling and record-keeping
                                processes.
                            </li>
                            <li>
                                Better organisation of sales and
                                transaction records could make
                                financial administration easier.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 p-3 shadow-sm">
                        <h5 className="text-primary">
                            Operational Requirements
                        </h5>
                        <ul className="mb-0 small">
                            <li>
                                A straightforward checkout process
                                suitable for everyday retail operations.
                            </li>
                            <li>
                                Improved visibility of available stock
                                and stock movements.
                            </li>
                            <li>
                                Accessible sales and purchasing
                                information for business decisions.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Proposed Solution */}
            <h3 className="mb-3">Proposed Solution</h3>

            <p>
                EbenCore POS aims to address the identified operational
                gaps by bringing essential shop-management functions
                together in a single desktop application.
            </p>

            <div className="row g-3 mb-4">

                <div className="col-md-6">
                    <div className="card h-100 p-3 shadow-sm">
                        <h5 className="text-primary">
                            Sales & Checkout
                        </h5>
                        <ul className="mb-0 small">
                            <li>Barcode scanning and product search.</li>
                            <li>Shopping cart and quantity management.</li>
                            <li>Cash, external card and split payments.</li>
                            <li>Sales transaction history.</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 p-3 shadow-sm">
                        <h5 className="text-primary">
                            Inventory Management
                        </h5>
                        <ul className="mb-0 small">
                            <li>Product and category management.</li>
                            <li>Stock movement tracking.</li>
                            <li>Low-stock and out-of-stock alerts.</li>
                            <li>Physical stock-count reconciliation.</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 p-3 shadow-sm">
                        <h5 className="text-primary">
                            Purchasing & Suppliers
                        </h5>
                        <ul className="mb-0 small">
                            <li>Supplier records.</li>
                            <li>Purchase order management.</li>
                            <li>Goods receiving and stock updates.</li>
                            <li>Supplier invoices and payment tracking.</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 p-3 shadow-sm">
                        <h5 className="text-primary">
                            Reporting & Financial Visibility
                        </h5>
                        <ul className="mb-0 small">
                            <li>Daily and monthly sales summaries.</li>
                            <li>Revenue and sales trend reporting.</li>
                            <li>Purchasing and stock-cost information.</li>
                            <li>Cash-session reconciliation.</li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Administrative Considerations */}
            <h3 className="mb-3">Administrative Considerations</h3>

            <div className="card p-3 shadow-sm mb-4">
                <p className="small mb-2">
                    The requirements gathering also highlighted
                    the importance of separating operational
                    record-keeping from statutory compliance.
                </p>

                <ul className="small mb-0">
                    <li>
                        Maintain organised transaction and invoice
                        records that can assist with financial
                        administration.
                    </li>
                    <li>
                        Provide accessible records for the business
                        owner or appointed accountant.
                    </li>
                    <li>
                        Keep SARS and UIF submissions within the
                        responsibility of the appropriate authorised
                        person or professional.
                    </li>
                </ul>

                <p className="small text-muted mt-3 mb-0">
                    EbenCore POS is not intended to replace an
                    accountant, SARS eFiling or the Department of
                    Employment and Labour's UIF submission systems.
                    Its role is to improve the availability and
                    organisation of supporting business records.
                </p>
            </div>

            {/* Design Approach */}
            <h3 className="mb-3">Design Approach</h3>

            <ul className="mb-4">
                <li>
                    <strong>Offline-first:</strong> Core shop operations
                    should remain available without continuous internet.
                </li>
                <li>
                    <strong>Touch-friendly:</strong> Designed for a
                    compact touchscreen checkout environment.
                </li>
                <li>
                    <strong>Consistent interface:</strong> Similar
                    management pages share common layouts and
                    interaction patterns.
                </li>
                <li>
                    <strong>Hardware integration:</strong> Designed
                    with barcode scanners, receipt printers and
                    cash drawers in mind.
                </li>
                <li>
                    <strong>Data integrity:</strong> Sales, payments
                    and stock movements should be recorded consistently.
                </li>
            </ul>

            {/* Project Status */}
            <div className="card bg-light p-3 mt-4">
                <h5 className="mb-2">Project Details</h5>
                <p className="mb-1">
                    <strong>Developer:</strong> EbenCore Consultants
                </p>
                <p className="mb-1">
                    <strong>Platform:</strong> Windows Desktop
                </p>
                <p className="mb-1">
                    <strong>Technology:</strong> C++17, Qt Widgets,
                    SQLite
                </p>
                <p className="mb-0">
                    <strong>Status:</strong> Active — design and development
                    planning
                </p>
            </div>

        </div>
    );
}
