class DevJobsAvatar extends HTMLElement{
    constructor(){
        super(); //llamar al constructor HTMLElement

        this.attachShadow({mode: 'open'})
    }

    render() {
        this.shadowRoot.innerHTML = `
        <img
            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Aiden"
            alt="avatar" 
            width="40px"

        />
            `
    }

    connectedCallback(){this.render()}
}

customElements.define('devjobs-avatar', DevJobsAvatar);