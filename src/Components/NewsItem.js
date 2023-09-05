import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div className="my-3">
            <div className="card shadow border-0"style={{ height: '37rem' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>
                </div>
                <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} 
                style={{height: '16rem' }}className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description ? description : "This is the description about daily News, get the updated news and knowning about all updates."}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <div className='text-center'>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn w-50"style={{backgroundColor: "#5ecaf1",
                        backgroundImage: "linear-gradient(0deg, #5ecaf1 0%, #5cf1ad 100%)"}}>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NewsItem