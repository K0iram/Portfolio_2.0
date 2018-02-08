import React from 'react'
import './style.css'

const BlogPost = () => (
	<div className="blog-post">
		<div className="blog-post__title">
			<h5>
				My First Post
			</h5>
			<date>2/8/2018</date>
		</div>
		<img src="https://placehold.it/200x200" alt="blog pic"/>
		<p className="blog-post__body">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
			Aliquam repellendus consequuntur itaque, officiis repudiandae 
			iusto obcaecati error pariatur nihil vel deserunt optio facere 
			quia soluta sed laborum dolores voluptatum porro.
		</p>
	</div>
)

export default BlogPost