import React from 'react';

export default function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Ура, вода закипела</p>;
    }
    return <p>Маленькая температура</p>;
}
