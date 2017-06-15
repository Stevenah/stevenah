import React, { PropTypes } from 'react';
import 'style/Blog.scss';

class Blog extends React.Component {
    render () {
        return(
            <div className="page">
                <section className="header">
                    <div className="title-container">
                        <h1>Steven Hicks</h1>
                        <span>The best there ever was</span>
                    </div>
                    <div className="title-right">
                    </div>
                </section>
                <section className="main-content">
                    <div className="meta-sidebar">

                        <div className="info-box">
                            <div className="info-box-title">
                                <h2>About</h2>
                            </div>
                            Hi, my name is Steven.
                        </div>

                        <div className="info-box">
                            <div className="info-box-title">
                                <h2>Contact me</h2>
                            </div>
                            Email me at steven@dhis2.org
                        </div>

                        <div className="info-box">
                            <div className="info-box-title">
                                <h2>Resources</h2>
                            </div>
                            <a href="">github</a>
                            <a href="">stackoverflow</a>
                            <a href="">github</a>
                        </div>

                        <div className="copyright-container">
                            Copyright Steven A. Hicks © 2017 <br />
                            Logo image © 1993 Steven A. Hicks <br />
                        </div>

                    </div>
                    <div className="blog-contnent">
                        <div className="blog-post">
                            <div className="blog-post-title">
                                <span> 24 Mar 2017 </span>
                                <h2>My Near Death Experience</h2>
                            </div>
                            <div className="blog-section">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fusce id gravida mauris, eget pretium dolor. Etiam 
                                rutrum purus id porttitor laoreet. Nunc ut rhoncus
                                nunc, aliquet ultricies purus. Duis commodo dolor 
                                at tristique volutpat. Vivamus mauris urna, sollicitudin
                                et dolor vitae, finibus dignissim elit. Pellentesque 
                                pretium at justo nec ultrices. Proin venenatis ante enim, 
                                sit amet malesuada sem vehicula ac. 
                            </div>
                        </div>
                        <div className="blog-post">
                            <div className="blog-post-title">
                                <span> 26 Mar 2018 </span>
                                <h2>Fuck This</h2>
                             </div>
                            <div className="blog-post-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fusce id gravida mauris, eget pretium dolor. Etiam 
                                rutrum purus id porttitor laoreet. Nunc ut rhoncus
                                nunc, aliquet ultricies purus. Duis commodo dolor 
                                at tristique volutpat. Vivamus mauris urna, sollicitudin
                                et dolor vitae, finibus dignissim elit. Pellentesque 
                                pretium at justo nec ultrices. Proin venenatis ante enim, 
                                sit amet malesuada sem vehicula ac. 
                            </div>
                        </div>

                        <div className="blog-post">
                            <div className="blog-post-title">
                                <span> 26 Mar 2018 </span>
                                <h2>Fuck That</h2>
                             </div>
                            <div className="blog-post-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fusce id gravida mauris, eget pretium dolor. Etiam 
                                rutrum purus id porttitor laoreet. Nunc ut rhoncus
                                nunc, aliquet ultricies purus. Duis commodo dolor 
                                at tristique volutpat. Vivamus mauris urna, sollicitudin
                                et dolor vitae, finibus dignissim elit. Pellentesque 
                                pretium at justo nec ultrices. Proin venenatis ante enim, 
                                sit amet malesuada sem vehicula ac. 
                            </div>
                        </div>

                        <div className="blog-post">
                            <div className="blog-post-title">
                                <span> 26 Mar 2018 </span>
                                <h2>Fuck That</h2>
                             </div>
                            <div className="blog-post-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fusce id gravida mauris, eget pretium dolor. Etiam 
                                rutrum purus id porttitor laoreet. Nunc ut rhoncus
                                nunc, aliquet ultricies purus. Duis commodo dolor 
                                at tristique volutpat. Vivamus mauris urna, sollicitudin
                                et dolor vitae, finibus dignissim elit. Pellentesque 
                                pretium at justo nec ultrices. Proin venenatis ante enim, 
                                sit amet malesuada sem vehicula ac. 
                            </div>
                        </div>

                        <div className="blog-post">
                            <div className="blog-post-title">
                                <span> 26 Mar 2018 </span>
                                <h2>Fuck That</h2>
                             </div>
                            <div className="blog-post-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Fusce id gravida mauris, eget pretium dolor. Etiam 
                                rutrum purus id porttitor laoreet. Nunc ut rhoncus
                                nunc, aliquet ultricies purus. Duis commodo dolor 
                                at tristique volutpat. Vivamus mauris urna, sollicitudin
                                et dolor vitae, finibus dignissim elit. Pellentesque 
                                pretium at justo nec ultrices. Proin venenatis ante enim, 
                                sit amet malesuada sem vehicula ac. 
                            </div>
                        </div>

                    </div>
                </section>
            </div>             
        )
    }
}

export default Blog;
