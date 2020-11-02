import React from 'react';
import ArticleCard from './ArticleCard';
import OpportunitySection from './OpportunitySection';

const ArticleCardList = () => {

    const data = [
        {
            opportunity: 'jc vk j  lmlmvnk knvkva;kvkv dkv m k k /mkmk nj dvm m wm  k ml m jk wd,  ld ml m nm m av m',
            detail: 'jk fvnl  k j kxl djv jv  jk ,m djv  njvj cj kv. k n jk. n.jnjv jc cm kv. FJ C'
        },
        {
            opportunity: 'jc vk j  lmlmvnk knvkva;kvkv dkv m k k /mkmk nj dvm m wm  k ml m jk wd,  ld ml m nm m av m',
            detail: 'jk fvnl  k j kxl djv jv  jk ,m djv  njvj cj kv. k n jk. n.jnjv jc cm kv. FJ C'
        },
        {
            opportunity: 'jc vk j  lmlmvnk knvkva;kvkv dkv m k k /mkmk nj dvm m wm  k ml m jk wd,  ld ml m nm m av m',
            detail: 'jk fvnl  k j kxl djv jv  jk ,m djv  njvj cj kv. k n jk. n.jnjv jc cm kv. FJ C'
        }
    ];

    const listArticle = (
        data.map((el, i) => <ArticleCard articleHeader={el.opportunity} articleBody={el.detail} key={i} />)
    )

    return (
        <div className="row ">
            <div className="col-xl-2 col-lg-0 col-md-0 col-sm-0 mr-md-3"></div>
            <div className="col-xl-6 col-lg-8 col-md-9 col-sm-10 drive mx-3 " style={{ overflowY: 'scroll' }}>
                {listArticle}
            </div>

            <div className="col-xl-3 col-lg-3 col-md-0 col-sm-0 px-5 " style={{}}>
                <div className="font-weight-bold nav-link-text pb-4">Oppotunities</div>
                <OpportunitySection />
                <OpportunitySection />
            </div>


        </div>
    );
}

export default ArticleCardList;
