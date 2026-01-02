class DevJobsAvatar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  createURL(service, username) {
    return `https://unavatar.io/${service}/${username}`;
  }

  render() {
    const service = this.getAttribute("service");
    const username = this.getAttribute("username");
    const size = this.getAttribute("size");
    const url = this.createURL(service, username);

    this.shadowRoot.innerHTML = `
      <style>
        img{
          width: ${size}px;
          heigth: ${size}px;
          border-radius: 100px
        }
      </style>
    
      <img 
        src="${url}" 
        alt="Avatar  de ${username}"             
      >`;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("devjobs-avatar", DevJobsAvatar);
