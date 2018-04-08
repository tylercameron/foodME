import React from 'react';
import styled from 'styled-components';

const Map = (props) => {
    const { location } = props;

    return (
        <MapContainer><MapImg src={location} alt="Map" /></MapContainer>
    );
}

export default Map;

const MapImg = styled.img`
    max-width: none;
    height: 100%;
`;

const MapContainer = styled.div`
    height: calc(100vh - 120px);
    overflow: hidden;
`;