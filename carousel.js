let displayGoogle = true, displayYelp = true, displayFacebook = true, googleRatings = 0.0;

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const tabBtns = document.querySelectorAll(".btns button");

let icons = [
    {
        'type': 'google',
        'icon': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="injected-svg"
                    data-src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-google-multicolor.svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#2A84FC"
                        d="M21.579 12.234c0-.677-.055-1.359-.172-2.025h-9.403v3.839h5.384a4.615 4.615 0 0 1-1.992 3.029v2.49h3.212c1.886-1.736 2.97-4.3 2.97-7.333Z">
                    </path>
                    <path fill="#00AC47"
                        d="M12.004 21.974c2.688 0 4.956-.882 6.608-2.406l-3.213-2.491c-.893.608-2.047.952-3.392.952-2.6 0-4.806-1.754-5.597-4.113H3.095v2.567a9.97 9.97 0 0 0 8.909 5.491Z">
                    </path>
                    <path fill="#FFBA00"
                        d="M6.407 13.916a5.971 5.971 0 0 1 0-3.817V7.531H3.095a9.977 9.977 0 0 0 0 8.953l3.312-2.568Z">
                    </path>
                    <path fill="#FC2C25"
                        d="M12.004 5.982a5.417 5.417 0 0 1 3.824 1.494l2.846-2.846a9.581 9.581 0 0 0-6.67-2.593A9.967 9.967 0 0 0 3.095 7.53l3.312 2.57c.787-2.363 2.996-4.117 5.597-4.117Z">
                    </path>
                </svg>`,
        'largeIcon': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 85 36" class="injected-svg google-bottom" data-src="https://static.elfsight.com/icons/app-all-in-one-reviews-logos-google-logo-multicolor.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g clip-path="url(#a-39)">
            <path fill="#4285F4" d="M20.778 13.43h-9.862v2.927h6.994c-.345 4.104-3.76 5.854-6.982 5.854-4.123 0-7.72-3.244-7.72-7.791 0-4.43 3.429-7.841 7.73-7.841 3.317 0 5.272 2.115 5.272 2.115l2.049-2.122s-2.63-2.928-7.427-2.928C4.725 3.644 0 8.8 0 14.367c0 5.457 4.445 10.777 10.988 10.777 5.756 0 9.969-3.942 9.969-9.772 0-1.23-.179-1.941-.179-1.941Z">
            </path>
            <path fill="#EA4335" d="M28.857 11.312c-4.047 0-6.947 3.163-6.947 6.853 0 3.744 2.813 6.966 6.994 6.966 3.786 0 6.887-2.893 6.887-6.886 0-4.576-3.607-6.933-6.934-6.933Zm.04 2.714c1.99 0 3.876 1.609 3.876 4.201 0 2.538-1.878 4.192-3.885 4.192-2.205 0-3.945-1.766-3.945-4.212 0-2.394 1.718-4.181 3.954-4.181Z">
            </path>
            <path fill="#FBBC05" d="M43.965 11.312c-4.046 0-6.946 3.163-6.946 6.853 0 3.744 2.813 6.966 6.994 6.966 3.785 0 6.886-2.893 6.886-6.886 0-4.576-3.607-6.933-6.934-6.933Zm.04 2.714c1.99 0 3.876 1.609 3.876 4.201 0 2.538-1.877 4.192-3.885 4.192-2.205 0-3.945-1.766-3.945-4.212 0-2.394 1.718-4.181 3.955-4.181Z">
            </path>
            <path fill="#4285F4" d="M58.783 11.319c-3.714 0-6.634 3.253-6.634 6.904 0 4.16 3.385 6.918 6.57 6.918 1.97 0 3.017-.782 3.79-1.68v1.363c0 2.384-1.448 3.812-3.633 3.812-2.11 0-3.169-1.57-3.537-2.46l-2.656 1.11c.943 1.992 2.839 4.07 6.215 4.07 3.693 0 6.508-2.327 6.508-7.205V11.734h-2.897v1.17c-.89-.96-2.109-1.585-3.726-1.585Zm.269 2.709c1.821 0 3.69 1.554 3.69 4.21 0 2.699-1.865 4.187-3.73 4.187-1.98 0-3.823-1.608-3.823-4.161 0-2.653 1.914-4.236 3.863-4.236Z">
            </path>
            <path fill="#EA4335" d="M78.288 11.302c-3.504 0-6.446 2.788-6.446 6.901 0 4.353 3.28 6.934 6.782 6.934 2.924 0 4.718-1.6 5.789-3.032l-2.389-1.59c-.62.962-1.656 1.902-3.385 1.902-1.943 0-2.836-1.063-3.39-2.094l9.266-3.845-.48-1.126c-.896-2.207-2.984-4.05-5.747-4.05Zm.12 2.658c1.263 0 2.171.671 2.557 1.476l-6.187 2.586c-.267-2.002 1.63-4.062 3.63-4.062Z">
            </path>
            <path fill="#34A853" d="M67.425 24.727h3.044V4.359h-3.044v20.368Z"></path>
        </g>
        <defs>
            <clipPath id="a-39">
                <path fill="#fff" d="M0 0h84.515v36H0z"></path>
            </clipPath>
        </defs>
    </svg>`
    },
    {
        'type': 'facebook',
        'icon': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="injected-svg" data-src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-facebook-multicolor.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path    fill="#0076FB" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path><path fill="#fff" fill-rule="evenodd" d="M16.167 6.167v2.639h-1.842a1.04 1.04 0 0 0-1.048 1.03v2.04h2.843l-.393 2.935h-2.45v7.108a10.094 10.094 0 0 1-2.982-.064v-7.044H7.833v-2.934h2.462V9.412c0-1.792 1.477-3.245 3.298-3.245h2.574Z" clip-rule="evenodd"></path></svg>`,
        'largeIcon': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 94 36" class="injected-svg facebook-bottom" data-src="https://static.elfsight.com/icons/app-all-in-one-reviews-logos-facebook-logo-multicolor.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path fill="#0076FB" d="M63.058 13.502c4.173 0 5.834 2.674 5.834 5.999 0 3.888-2.619 5.999-5.834 5.999-3.938 0-5.834-2.357-5.834-6 0-3.43 1.463-5.998 5.834-5.998Zm12.879 0c4.172 0 5.834 2.674 5.834 5.999 0 3.888-2.619 5.999-5.834 5.999-3.938 0-5.834-2.357-5.834-6 0-3.43 1.463-5.998 5.834-5.998Zm-62.245-.159c1.373 0 2.6.704 3.486 1.83v-1.495h3.36v11.417h-3.342l.018-1.477c-.885 1.143-2.15 1.864-3.522 1.864-2.692 0-4.877-2.34-4.877-6.07 0-3.764 2.185-6.069 4.877-6.069Zm34.085-5.7-.018 7.548c.885-1.144 2.15-1.865 3.522-1.865 2.691 0 4.877 2.34 4.877 6.07 0 3.764-2.186 6.069-4.877 6.069-1.373 0-2.601-.704-3.486-1.83v1.513l-3.486-.07V8.03l3.468-.387Zm-10.188 5.77c6.495.052 5.372 6.763 5.296 7.176l-.003.02v-.017H35.44s-.163 2.04 1.878 2.216c2.023.176 4.606-.598 4.606-.598l.74 2.305s-2.42 1.196-5.599.827c-3.197-.37-5.057-1.513-5.202-5.454 0 0-.975-6.51 5.726-6.474Zm-14.035 1.355c1.97-1.759 6.358-1.583 7.803-.545l-.848 2.463s-.633-.616-2.44-.598c0 0-2.672-.159-2.672 3.22v.175c0 3.36 2.673 3.22 2.673 3.22 1.806.035 2.439-.58 2.439-.598l.848 2.463c-1.463 1.038-5.834 1.213-7.803-.546-1.698-1.513-1.698-3.993-1.662-4.627-.036-.633-.036-3.096 1.662-4.627Zm62.986-7.16V18.78l3.558-5.138h3.74l-3.65 5.736L94 25.13h-3.613l-3.847-5.84v5.84h-3.504V7.96l3.504-.352ZM6.369 7.502h2.464v2.78H7.26s-1.427-.193-1.427 1.144v2.181h2.999l-.361 3.026H5.816v8.445H2.348V16.58H0v-2.974h2.439v-2.533s-.308-1.39.975-2.533c1.233-1.1 2.834-1.045 2.955-1.039Zm8.389 8.621c-1.229 0-2.24 1.09-2.24 2.234v2.182c0 1.143.993 2.234 2.24 2.234 1.228 0 2.24-1.09 2.24-2.234v-2.182c0-1.143-.994-2.234-2.24-2.234Zm48.264-.053c-1.283 0-2.312 1.091-2.312 2.235v2.181c0 1.144 1.047 2.234 2.312 2.234 1.282 0 2.312-1.09 2.312-2.234v-2.181c0-1.144-1.048-2.235-2.312-2.235Zm12.879 0c-1.283 0-2.312 1.091-2.312 2.235v2.181c0 1.144 1.047 2.234 2.312 2.234 1.282 0 2.312-1.09 2.312-2.234v-2.181c0-1.144-1.048-2.235-2.312-2.235Zm-25.668-.017c-1.228 0-2.24 1.09-2.24 2.234v2.181c0 1.144 1.012 2.235 2.24 2.235 1.229 0 2.24-1.091 2.24-2.235v-2.181c0-1.144-1.011-2.234-2.24-2.234Zm-12.698-.282c-2.348 0-2.168 2.534-2.168 2.534h4.336s.18-2.534-2.168-2.534Z">
        </path>
    </svg>`
    },
    {
        'type': 'yelp',
        'icon': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="injected-svg" data-src="https://static.elfsight.com/icons/app-all-in-one-reviews-icons-yelp-multicolor.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#D42322" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path><path fill="#fff" d="M10.947 14.399c.308-.395 1.02-.144.999.366 0 .12.005 3.025-.043 3.159-.06.155-.18.252-.366.29-.258.045-.694-.049-1.306-.278-.563-.21-1.45-.559-1.261-1.105.071-.178 1.315-1.632 1.977-2.432Zm2.123.096c-.28-.42.174-1.035.655-.863 0 0 2.828.928 2.935 1.024.134.106.184.254.157.444-.07.536-1.14 1.908-1.633 2.105-.177.068-.33.053-.454-.051-.127-.091-1.581-2.524-1.66-2.66Zm-5.416-3.296c.122 0 1.717.673 2.884 1.154.438.176.476.93-.038 1.088-.026.009-2.795.928-2.964.929-.388-.023-.473-.42-.509-.81a6.065 6.065 0 0 1 .008-1.217c.048-.489.14-1.173.619-1.144Zm7.157-2.137c.133-.093.29-.098.468-.015.47.228 1.41 1.64 1.47 2.199-.003.075.03.304-.19.457-.144.096-2.837.733-3.023.796l.008-.016c-.463.122-.905-.48-.596-.9.094-.095 1.686-2.401 1.863-2.52ZM8.188 6.034c.4-.429 2.544-1.035 3.11-.886.192.049.31.158.353.327.033.217.294 4.352.33 5.006l.003.094c-.001.915-.673 1.138-1.21.278L8.052 6.486a.467.467 0 0 1 .135-.452Z"></path></svg>`,
        'largeIcon': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 72 36" class="injected-svg yelp-bottom" data-src="https://static.elfsight.com/icons/app-all-in-one-reviews-logos-yelp-logo-multicolor.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g clip-path="url(#a-1)"><path fill="#FF1A1A" d="m57.802 18.346 1.167-.27c.038-.008.076-.018.114-.03a1.288 1.288 0 0 0 .92-1.533l-.006-.02a1.286 1.286 0 0 0-.198-.434 1.622 1.622 0 0 0-.476-.408 4.388 4.388 0 0 0-.677-.313l-1.278-.466c-.717-.267-1.435-.527-2.16-.78-.468-.167-.866-.314-1.213-.42-.065-.02-.137-.04-.195-.06-.419-.13-.711-.182-.96-.183a1.143 1.143 0 0 0-.485.088c-.16.069-.303.17-.42.299a2.547 2.547 0 0 0-.166.209 2.46 2.46 0 0 0-.245.488 6.634 6.634 0 0 0-.35 2.178c.006.67.024 1.529.392 2.11.088.15.207.28.35.38.261.18.526.205.802.225.411.029.81-.072 1.208-.164l3.873-.896h.003Zm13.006-6.193a6.623 6.623 0 0 0-1.266-1.805 2.514 2.514 0 0 0-.435-.332 2.48 2.48 0 0 0-.24-.114 1.155 1.155 0 0 0-.983.05c-.222.11-.463.287-.783.584a2.938 2.938 0 0 1-.15.14c-.263.25-.557.556-.907.912-.54.546-1.07 1.095-1.599 1.65l-.945.98a4.42 4.42 0 0 0-.47.579 1.62 1.62 0 0 0-.25.576 1.27 1.27 0 0 0 .01.477l.006.02a1.285 1.285 0 0 0 1.497.973c.051-.007.092-.016.117-.021l5.04-1.166c.398-.092.801-.177 1.157-.384.24-.14.468-.277.623-.554a1.24 1.24 0 0 0 .149-.495c.077-.687-.282-1.467-.57-2.07Zm-9.022 2.122c.366-.46.364-1.143.396-1.703.11-1.868.225-3.737.316-5.607.036-.707.112-1.406.069-2.12-.034-.588-.039-1.264-.41-1.747-.658-.852-2.056-.781-3.01-.648a8.97 8.97 0 0 0-.876.164c-.29.07-.578.146-.86.237-.915.3-2.203.85-2.42 1.906-.123.597.169 1.206.395 1.752.273.66.648 1.253.99 1.874.9 1.641 1.82 3.27 2.736 4.902.273.486.571 1.103 1.1 1.355a.69.69 0 0 0 .107.04c.237.09.495.109.743.05l.045-.01c.228-.063.434-.186.596-.359a.949.949 0 0 0 .083-.086Zm-.435 5.003a1.165 1.165 0 0 0-1.46-.37c-.08.04-.157.089-.23.143-.21.155-.386.358-.547.56-.041.052-.078.12-.127.166l-.81 1.116c-.46.624-.913 1.25-1.362 1.887-.293.411-.546.758-.747 1.065-.038.058-.078.123-.113.174-.24.372-.377.643-.446.884-.053.16-.07.33-.049.499.023.174.081.342.173.492.049.076.101.148.157.219.121.14.258.265.407.374.56.39 1.173.67 1.819.886a6.428 6.428 0 0 0 1.657.316 2.545 2.545 0 0 0 .552-.043 2.52 2.52 0 0 0 .258-.076 1.172 1.172 0 0 0 .709-.701c.093-.234.154-.531.195-.97.004-.064.013-.14.019-.208.031-.365.047-.794.07-1.3.039-.775.07-1.547.095-2.323l.05-1.377c.012-.319.003-.67-.086-.985a1.468 1.468 0 0 0-.184-.428Zm9.153 2.154c-.17-.186-.409-.371-.788-.6-.054-.03-.118-.07-.177-.106-.315-.189-.695-.389-1.138-.63a134.79 134.79 0 0 0-2.05-1.098l-1.215-.644c-.063-.018-.127-.063-.186-.092a3.016 3.016 0 0 0-.738-.264 1.557 1.557 0 0 0-.268-.027 1.01 1.01 0 0 0-.174.01 1.167 1.167 0 0 0-.974.963 1.51 1.51 0 0 0 .017.464c.06.324.205.643.354.923l.649 1.216c.36.686.727 1.368 1.102 2.047.242.443.442.823.63 1.137.037.06.077.123.108.177.23.378.414.617.6.787.121.117.266.206.426.261.166.055.343.075.518.058.089-.011.177-.027.265-.047.086-.023.17-.05.254-.082a1.88 1.88 0 0 0 .261-.122 6.44 6.44 0 0 0 1.352-1.012 7.123 7.123 0 0 0 1.247-1.593 2.512 2.512 0 0 0 .202-.517 2.44 2.44 0 0 0 .044-.265 1.255 1.255 0 0 0-.06-.519 1.153 1.153 0 0 0-.261-.425Z"></path><path fill="#000" fill-rule="evenodd" d="M28.67 9.605c0-1.002.816-1.82 1.801-1.82.972 0 1.76.818 1.802 1.834V23.83a1.82 1.82 0 0 1-1.802 1.82 1.8 1.8 0 0 1-1.802-1.82V9.605Zm-1.675 8.778c-.014.282-.084.804-.45 1.186-.395.41-.93.507-1.24.507-1.287.008-2.575.011-3.863.015-1.287.003-2.576.007-3.864.014.114.353.339.89.846 1.383.31.297.604.466.731.536.155.099.69.381 1.351.381.704 0 1.323-.225 1.929-.536l.05-.027c.42-.217.855-.442 1.314-.524.451-.07.93.015 1.282.324.422.368.591.905.436 1.455-.183.62-.703 1.157-1.252 1.482a6.36 6.36 0 0 1-.986.465 7.43 7.43 0 0 1-2.716.423c-.225 0-.464 0-.704-.027-.251-.032-.5-.08-.746-.142a5.3 5.3 0 0 1-1.126-.38 6.172 6.172 0 0 1-1.028-.58 6.711 6.711 0 0 1-.9-.776 6.971 6.971 0 0 1-.747-.93c-.76-1.158-1.111-2.584-1.041-3.967.057-1.354.507-2.709 1.323-3.81.087-.13.183-.252.288-.367.041-.047.082-.094.12-.141 1.009-1.233 2.356-1.623 2.911-1.784l.03-.009a6.311 6.311 0 0 1 3.45 0c.267.071 1.773.537 2.94 1.793.058.057.212.24.41.508.5.68.866 1.448 1.081 2.265l.002.007c.085.31.17.733.17 1.256Zm-8.262-2.329a3.179 3.179 0 0 0-1.098 1.779h6.136a3.276 3.276 0 0 0-1.111-1.779 3.208 3.208 0 0 0-1.971-.705c-.267 0-1.14.042-1.956.705Zm23.335-3.74c-1.603 0-3.068.72-4.109 1.892v-.043a1.795 1.795 0 1 0-3.59.1v13.562a1.8 1.8 0 0 0 1.803 1.806c.999 0 1.801-.804 1.801-1.807v-4.233c1.042 1.157 2.492 1.89 4.11 1.89 3.223 0 5.84-2.92 5.84-6.561-.014-3.642-2.632-6.605-5.855-6.605Zm-.788 10.218c-1.829 0-3.321-1.594-3.321-3.584 0-2.005 1.478-3.6 3.321-3.6 1.83 0 3.322 1.595 3.322 3.6-.014 1.989-1.492 3.584-3.322 3.584Zm-29.71-2.667-.592 1.299a65.427 65.427 0 0 0-.788 1.721c-.082.177-.162.358-.245.543-1.125 2.502-2.46 5.473-5.37 6.105-1.408.31-3.534-.114-4.321-1.44-.789-1.341.38-2.88 1.885-2.527.238.054.472.17.707.287.392.196.79.395 1.222.306.407-.07.661-.367.984-.747a3.51 3.51 0 0 0 .732-1.398.672.672 0 0 1-.02-.05.663.663 0 0 0-.021-.048c-.368-.684-.687-1.295-.954-1.806-.175-.333-.326-.622-.454-.862l-.615-1.165c-.45-.853-.524-.993-.722-1.361a51.754 51.754 0 0 0-1.38-2.442c-.521-.875-1.055-1.849-.62-2.879a1.721 1.721 0 0 1 2.112-.988c.906.275 1.307 1.137 1.683 1.944.068.145.135.289.204.427.604 1.2 1.196 2.4 1.787 3.598.052.12.131.283.228.48.086.177.186.38.292.608.056.117.108.227.157.326.06.126.114.235.153.323.274-.684.552-1.366.83-2.046.278-.681.557-1.363.831-2.047.007-.038.073-.184.171-.405.148-.325.29-.653.427-.983.365-.89.804-1.96 1.78-2.253a1.737 1.737 0 0 1 1.9.663c.212.297.297.636.31.974.012.749-.35 1.553-.661 2.243-.076.168-.148.33-.212.481l-.037.083c-.086.193-.32.718-.722 1.582-.146.31-.286.62-.427.934l-.235.52Z" clip-rule="evenodd"></path></g><defs><clipPath id="a-1"><path fill="#fff" d="M0 0h71.389v36H0z"></path></clipPath></defs></svg>`
    }
];

let starIcon = `<svg class="star" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3796_102578)">
                    <path
                        d="M6.82617 11.442L3.54617 13.166C3.46353 13.2093 3.3704 13.2287 3.27732 13.2219C3.18425 13.2151 3.09494 13.1824 3.0195 13.1274C2.94406 13.0725 2.8855 12.9975 2.85045 12.911C2.8154 12.8245 2.80526 12.7299 2.82117 12.638L3.44817 8.98798C3.46192 8.908 3.456 8.82587 3.43091 8.74869C3.40582 8.67151 3.36232 8.6016 3.30417 8.54499L0.650168 5.95899C0.583317 5.89388 0.53602 5.81136 0.51363 5.72076C0.491239 5.63017 0.494647 5.53512 0.52347 5.44637C0.552292 5.35761 0.605378 5.27869 0.676721 5.21854C0.748065 5.15838 0.834818 5.1194 0.927168 5.10599L4.59317 4.57299C4.67344 4.56146 4.7497 4.53059 4.81537 4.48303C4.88105 4.43547 4.93418 4.37265 4.97017 4.29999L6.61017 0.977985C6.65153 0.894518 6.7154 0.824266 6.79455 0.775151C6.87371 0.726037 6.96501 0.700012 7.05817 0.700012C7.15132 0.700012 7.24263 0.726037 7.32178 0.775151C7.40094 0.824266 7.4648 0.894518 7.50617 0.977985L9.14717 4.29899C9.18307 4.37152 9.23604 4.43426 9.30153 4.48182C9.36702 4.52937 9.44308 4.56031 9.52317 4.57199L13.1892 5.10499C13.2815 5.1184 13.3683 5.15738 13.4396 5.21754C13.511 5.27769 13.564 5.35661 13.5929 5.44537C13.6217 5.53412 13.6251 5.62917 13.6027 5.71976C13.5803 5.81036 13.533 5.89288 13.4662 5.95798L10.8132 8.54398C10.7552 8.60049 10.7118 8.67024 10.6867 8.74723C10.6616 8.82422 10.6556 8.90616 10.6692 8.98598L11.2962 12.637C11.3122 12.7291 11.3021 12.8238 11.267 12.9105C11.232 12.9971 11.1733 13.0722 11.0977 13.1272C11.0221 13.1822 10.9326 13.2149 10.8393 13.2215C10.7461 13.2282 10.6528 13.2086 10.5702 13.165L7.29117 11.441C7.21946 11.4033 7.13967 11.3836 7.05867 11.3836C6.97767 11.3836 6.89788 11.4033 6.82617 11.441V11.442Z"
                        fill="#ffb400"></path>
                </g>
                <defs>
                    <clipPath id="clip0_3796_102578">
                        <rect width="14" height="14" fill="white"></rect>
                    </clipPath>
                </defs>
                </svg>`

let displayTabs = [
    {
        'label': 'google',
        'display': displayGoogle,
    },
    {
        'label': 'facebook',
        'display': displayFacebook,
    },
    {
        'label': 'yelp',
        'display': displayYelp,
    }
];

let all = [
    {
        'name': 'Brian Salo',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor.',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'Marissa Dumayac',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'Julcarl Selma',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'Joe John Ferrolino',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'Fel Reind Entica',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'google'
    },
    {
        'name': 'Nigel dela Riarte',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'Ret Karlo Ferrolino',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'Daniel Cisneros',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'Harvey Aparece',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'Joey Destacamento',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
    {
        'name': 'Ericka Jane Quitorio',
        'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
        'rating': 5,
        'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
        'date': '2 days ago',
        'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
        'type': 'yelp'
    },
];

async function getGoogleReviews() {
    await fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJLV2HitsliYgRDP-cgzHt1CI&fields=name,rating,reviews&key=AIzaSyAHRcJ3LBuRPcnoOmx-VfjemwiBPs3UE7M', {
        method: 'GET',
        mode: 'cors',
    })
        .then(response => response.json())
        .then(response => {
            googleRatings = response.result.rating
            all = response.result.reviews.map(res => {
                return {
                    'name': res.author_name,
                    'profile_pic': res.profile_photo_url,
                    'rating': res.rating,
                    'comment': res.text,
                    'date': res.time,
                    'profile_link': res.author_url,
                    'type': 'google'
                }
            })
        })
        .catch(err => console.error(err));
}

async function getYelpReviews() {
    await fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/xaDEiJ0N0SYOv-u0JXBSNQ/reviews?limit=20&sort_by=yelp_sort', {
        method: 'GET',
        mode: 'cors',
        headers: {
            "accept": 'application/json',
            "Authorization": 'Bearer yugTEZuzyqh5VDh7lDWNtqy9mLmi3-W5lgXTjf45a_8_6cswDP0UOoKInNaRM0ckn8rFEhtnME0MvRQ-gParjtflvsovNDswGuUnapmL8h1RHU9evUIZDNYG-xamZHYx',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Credentials": "true",
        }
    })
        .then(response => response.json())
        .then(response => {
            response.reviews.forEach(res => {
                let ap = {
                    'name': res.user.name,
                    'profile_pic': res.user.image_url,
                    'rating': res.rating,
                    'comment': res.text,
                    'date': res.time_created,
                    'profile_link': res.profile_url,
                    'type': 'yelp'
                }
                all.push(ap)
            })
        })
        .catch(err => console.error(err));
}

function addFacebook() {
    let insert = [
        {
            'name': 'Philip Bautista',
            'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
            'rating': 5,
            'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
            'date': '2 days ago',
            'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
            'type': 'facebook'
        },
        {
            'name': 'John Dave Paciño',
            'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
            'rating': 5,
            'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
            'date': '2 days ago',
            'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
            'type': 'facebook'
        },
        {
            'name': 'Kerwien Bengil',
            'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
            'rating': 5,
            'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
            'date': '2 days ago',
            'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
            'type': 'facebook'
        },
        {
            'name': 'Joshua Avenido',
            'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
            'rating': 5,
            'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
            'date': '2 days ago',
            'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
            'type': 'facebook'
        },
        {
            'name': 'Edward Trisana',
            'profile_pic': 'https://lh3.googleusercontent.com/a-/AD_cMMROixjhsB9pUTPxinrxvXNyTDWcoYntAtnP75vAFoZyx34=s240-c-rp-mo-br100',
            'rating': 5,
            'comment': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem excepturi dolor facilis iure, temporibus tempora laudantium? Excepturi iusto amet sapiente, adipisci tenetur autem laboriosam, eius beatae aspernatur rerum commodi?',
            'date': '2 days ago',
            'profile_link': 'https://www.google.com/maps/contrib/101414297167587541507/place/ChIJR5lXc_W3j4ARlrHTCI2AEZE/@37.4030738,-122.0086372,17z/data=!3m1!4b1?entry=ttu',
            'type': 'facebook'
        },
    ];

    for (i = 0; i < insert.length; i++) {
        all.push(insert[i]);
    }

}

// Display tabs
displayTabs.forEach(tab => {
    if (tab.display) {
        document.querySelector(`#${tab.label}`).style.display = 'flex';
    }
})

// Pick an Icon
function getIcon(type, large = false) {
    let result = ''

    icons.forEach(social => {
        if (social.type == type) {
            result = large ? social.largeIcon : social.icon
        }
    });

    return result;
}

// Add event listeners for the tab buttons to filter the display of cards
tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let change = 'Overall Rating';

        document.querySelectorAll('.active').forEach(active => {
            active.classList.remove('active');
        });

        change = getIcon(btn.id, true);
        change = change == '' ? 'Overall Rating' : change + ' Rating';

        carousel.innerHTML = '';
        document.querySelector('.testimonial-heading h3').innerHTML = change
        btn.classList.add('active')

        displayCards(btn.id)
    });
});

// Get the posted Date
function getDate(postedDate) {
    posted_date = new Date(postedDate);
    current_date = new Date();

    var milli_secs = posted_date.getTime() - current_date.getTime();

    // Convert the milli seconds to Days 
    var days = milli_secs / (1000 * 3600 * 24);

    return Math.round(Math.abs(days));
}

// Cards
function card(content, stars, icon) {
    return `<li class="card">
            <div class="content">
                <div class="review-image-date-wrapper">
                    <img class="review-image" src="${content.profile_pic}">
                    <div class="review-name-wrapper">
                        <p class="review-name">${content.name}</p>
                        <p class="review-date">8 days ago</p>
                    </div>
                </div>
                <div class="star-wrapper">
                    ${stars}
                </div>
                <div class="review-content toggle-content" id="contentText">
                    ${content.comment}
                </div>
                <p class="readmore">Read more</p>
                <div class="posted-on-wrapper">
                    <div>
                        ${icon}
                    </div>
                    <div>
                        <p class="posted-on-text">Posted on</p>
                        <a href="#" class="where-is-it-posted">${content.type}</a>
                    </div>
                </div>
            </div>
        </li>`;
}

// Display the cards in the ul element
function displayCards(display) {
    let visibles = 0;

    all.forEach(content => {
        let stars = '';

        for (var i = 0; i < content.rating; i++) {
            stars += starIcon
        }

        if (display == 'all') {
            displayTabs.forEach(tab => {
                if (tab.label == content.type && tab.display) {
                    visibles++;

                    carousel.innerHTML += card(content, stars, getIcon(content.type))
                }
            });
        } else {
            if (content.type == display) {
                visibles++;

                carousel.innerHTML += card(content, stars, getIcon(content.type));
            }
        }
    });

    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const carouselChildrens = [...carousel.children];

    duplicate(firstCardWidth, carouselChildrens, visibles);

    checkContentLength();
    triggerToggleBtn();
}

// Toggle the clamp content
function triggerToggleBtn() {
    const readmore = document.querySelectorAll('p.readmore');

    readmore.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.parentNode.querySelector('.review-content').classList.toggle('toggle-content');

            if (btn.innerHTML == 'Hide') {
                btn.innerHTML = 'Read more'
            } else {
                btn.innerHTML = 'Hide';
            }
        });
    });
}

// Check text length to clamp
function checkContentLength() {
    const content = document.querySelectorAll('.review-content');

    content.forEach(con => {
        if (con.offsetHeight < 67) {
            con.classList.remove('toggle-content')
            con.parentNode.querySelector('.readmore').style.display = 'none'
        }
    })
}

// Toggle Arrows
function displayArrowBtns() {
    document.querySelector('#right').style.display = 'block'
    document.querySelector('#left').style.display = 'block'
}

// Toggle Arrows
function hideArrowBtns() {
    document.querySelector('#right').style.display = 'none'
    document.querySelector('#left').style.display = 'none'
}

function duplicate(firstCardWidth, carouselChildrens, visibles) {
    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    if (visibles > cardPerView) {
        // Insert copies of the last few cards to beginning of carousel for infinite scrolling
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        // Insert copies of the first few cards to end of carousel for infinite scrolling
        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        // Display Arrows
        displayArrowBtns()
    } else {
        // Hide Arrows
        hideArrowBtns()
    }
}

// Main Functionalities
async function main() {

    // await getGoogleReviews();
    // await getYelpReviews();
    addFacebook()

    displayCards('all')

    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];
    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        // If the carousel is at the end, scroll to the beginning
        else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        // Clear existing timeout & start autoplay if mouse is not hovering over carousel
        clearTimeout(timeoutId);
        // if (!wrapper.matches(":hover")) autoPlay();
    }

    // const autoPlay = () => {
    //     if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    //     // Autoplay the carousel after every 2500 ms
    //     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    // }
    // autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    // wrapper.addEventListener("mouseleave", autoPlay);
}

// Calling the method
main()


