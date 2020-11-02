import React from 'react';
import ArticleHeadings from './ArticleHeadings';

const ArticleHeadingList = () => {
    return (
        <div className="row mt-4 mb-1 pb-1" >
            {/*<div className="col-xl-2 col-lg-2 col-md-0 col-sm-0 mr-5"></div> */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ml-0">
                <div className="row drive d-flex felx-row flex-nowrap mx-2" style={{ maxWidth: '100vw', overflowX: 'scroll', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                    <div className="col-xl-2 col-lg-2 col-md-0 col-sm-0 mr-4"></div>
                    <ArticleHeadings />
                    <ArticleHeadings />
                    <ArticleHeadings />
                    <ArticleHeadings />
                    <ArticleHeadings />
                    <ArticleHeadings />
                    <ArticleHeadings />
                    <ArticleHeadings />
                    <ArticleHeadings />
                    <ArticleHeadings />

                </div>
            </div>

        </div >
    );
}

export default ArticleHeadingList;
