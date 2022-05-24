const api = 'https://kitsu.io/api/edge/';


import React, { useEffect, useState } from 'react';

export function Kitsu(anime) {
    fetch(
        `${api}anime?filter[text]=${text}&page[limit]=12`
    ).then((response) => response.json())
    .then((response) => {
            return(response);
    });
}