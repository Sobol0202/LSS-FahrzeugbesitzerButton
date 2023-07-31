// ==UserScript==
// @name         Fahrzeugbesitzer-Button
// @namespace    www.leitstellenspiel.de
// @version      1.0
// @description  Fügt einen Button neben dem Fahrzeugbesitzer-Namen hinzu, der den Namen in das RMS einfügt.
// @author       MissSobol
// @match        https://www.leitstellenspiel.de/missions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Funktion zum Einfügen des Buttons und Hinzufügen des Klick-Handlers
    function addButtonToOwner() {
        const rows = document.querySelectorAll('tr[id^="vehicle_row_"]');

        rows.forEach(row => {
            const ownerLink = row.querySelector('td:nth-child(5) a[href^="/profile/"]');
            if (ownerLink && !ownerLink.parentElement.querySelector('button[data-owner-button]')) {
                const ownerName = ownerLink.textContent.trim();
                const button = document.createElement('button');
                button.textContent = '@';
                button.style.marginLeft = '5px';
                button.dataset.ownerButton = true;
                button.onclick = function() {
                    const input = document.getElementById('mission_reply_content');
                    input.value += '@' + ownerName + ' ';
                };

                ownerLink.parentElement.appendChild(button);
            }
        });
    }

    addButtonToOwner();
})();
