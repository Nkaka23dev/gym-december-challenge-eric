import React from 'react'

export default function Button({ styles, title }) {
    return (
        <div className={`px-6 py-3 text-2xl text-whiterounded-xl ${styles} `}>
            {title}
        </div>   
    )
}