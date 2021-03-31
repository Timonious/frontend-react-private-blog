import React from 'react'
import posts from '../../data/posts.json'
import { Link} from "react-router-dom";
import './blogposts.css'
function BlogPost() {
    return (
        <div id='posts'>
           <div><h1>BlogPosts</h1>
               <h3>Mijn gedoe, waar eigenlijk niemand om geeft</h3></div>
            <ol className='post-list'>
                {posts.map((post) => {
                    return (
                        <li key={post.id}><Link to={`/blog/${post.id}`}>{post.title}</Link></li>
                    );
                })
                }
            </ol>
            <p id='post-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid delectus dignissimos distinctio, et illum ipsa ipsum magnam perspiciatis possimus, praesentium quasi quibusdam ratione repudiandae sapiente, totam veritatis. Aperiam assumenda beatae cupiditate dicta ea esse et in libero, maiores molestias officiis quam qui quo repudiandae saepe voluptas voluptatem. Accusantium adipisci amet aperiam assumenda beatae blanditiis cum cupiditate delectus doloremque ea ex iure nesciunt nisi numquam perspiciatis, praesentium provident qui quia quibusdam rerum soluta sunt totam vel! Accusantium aperiam at consequatur cupiditate dolorem doloribus eaque error, exercitationem fugiat illo, inventore maxime minima necessitatibus quam quas qui reprehenderit voluptas voluptatem. Assumenda blanditiis debitis dolore dolorum enim esse facilis, ipsa itaque laborum libero mollitia nesciunt non numquam officia officiis, optio quae quasi quibusdam quidem reiciendis repellat rerum sint soluta tempora temporibus ut veritatis voluptates. Consectetur cumque error nisi repellat repudiandae sapiente veritatis. Aspernatur est impedit libero nisi sit vel? Dignissimos illo incidunt ipsam modi mollitia officia optio vel voluptas. Aut autem delectus dolore natus neque sunt voluptatum? Accusamus aperiam architecto aspernatur cupiditate dolore error esse eum facere fugiat impedit ipsa nam placeat, porro quaerat quas sequi sit veritatis voluptate! Consequatur distinctio eos unde? Corporis delectus earum eligendi fugit ipsa iste magnam quas unde?</p>
        </div>
    )
}

export default BlogPost