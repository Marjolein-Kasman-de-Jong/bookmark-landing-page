import React, { useEffect, useRef, useState } from 'react';

// Components
import Button from '../button/Button';

// Styles
import './article.css';

function Article({ title, text, buttonType, buttonText }) {
    const articleRef = useRef(null);
    const [isChildOfIntro, setIsChildOfIntro] = useState(false);

    // Check if article is a child of .intro
    useEffect(() => {
        if (articleRef.current) {
            const parentElement = articleRef.current.parentElement;
            if (parentElement && parentElement.classList.contains('intro-text-container')) {
                setIsChildOfIntro(true);
            } else {
                setIsChildOfIntro(false);
            }
        }
    }, [])

    return (
        <article ref={articleRef}>
            <header>
                {/* Render h1 if article is a child of .intro, else render h2 */}
                {
                    isChildOfIntro ? <h1>{title}</h1> : <h2>{title}</h2>
                }
            </header>
            <p>
                {text}
            </p>
            <footer>
                {
                    buttonText.map((item) => {
                        return <Button key={item} type={buttonType} buttonText={item} />
                    })
                }
            </footer>
        </article>
    );
}

export default Article;