import React, { useEffect, useRef, useState } from 'react';

// Components
import Button from '../button/Button';

// Styles
import './article.css';

function Article({ title, text, buttonType, buttonText }) {
    const articleRef = useRef(null);
    const [isChildOfIntro, setIsChildOfIntro] = useState(false);
    const [isChildOfFeature, setIsChildOfFeature] = useState(false);

    useEffect(() => {
        if (articleRef.current) {
            const parentElement = articleRef.current.parentElement;
            // Check if article is a child of .intro
            if (parentElement && parentElement.classList.contains('intro')) {
                setIsChildOfIntro(true);
            } else {
                setIsChildOfIntro(false);
            }
            // Check is article is a child of .feature
            if (parentElement && parentElement.classList.contains('feature')) {
                setIsChildOfFeature(true);
            } else {
                setIsChildOfFeature(false);
            }
        }
    }, [])

    return (
        <article ref={articleRef}>
            <header>
                {
                    isChildOfIntro ?
                        <h1>{title}</h1>
                        :
                        isChildOfFeature ?
                            <h3>{title}</h3>
                            :
                            <h2>{title}</h2>
                }
            </header>
            <p>
                {text}
            </p>
            <footer>
                {
                    buttonText && buttonText.map((item) => {
                        return <Button key={item} type={buttonType} buttonText={item} />
                    })
                }
            </footer>
        </article>
    );
}

export default Article;