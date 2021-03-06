import React from 'react'

const Newsitems = (props)=> {

        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card" styles="width: 18rem;">
                    <img src={imageUrl === null ? "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg" : imageUrl} className="card-img-top" alt="..." width={100} height={200} />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0,80)}...</h5>
                        <p className="card-text"><small className="text-muted">Source: {source}</small></p>
                        <p className="card-text">{description.slice(0,100)}...</p>
                        <p className="card-text"><small className="text-muted">Author: {author === null ? "Unknown" : author}, Date: {new Date(date).toGMTString()}</small></p>

                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-warning">Read more</a>
                    </div>
                </div>
            </div>
        )
    }

export default Newsitems
