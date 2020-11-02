import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const OpportunitySection = () => {
    return (
        <Fragment>
            <div className="font-weight-bold text-sm nav-link-text"> opportunity title</div>
            <div className="nav-link-text font-weight-bold text-light align-text-right" style={{ fontSize: '11px' }}>short write up about the oppportunity</div>
            <Link children='apply here' className="text-primary" to="" style={{ fontSize: '12px' }} />
            <hr className="py-1 my-2" />
        </Fragment>
    );
}

export default OpportunitySection;
