import React from 'react'
import {Container, Title, SubTitle} from "./styles/feature"

export default function Feature({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Feature.Title = function FeatureTitle({children, ...restProps}) {
    return <Title>{children}</Title>
    
}

Feature.SubTitle = function FeatureSubTitle({children, ...restProps}) {
    return <SubTitle>{children}</SubTitle>
    
}