<script>
    const year = new Date().getFullYear();
  </script>
  
  <footer class="footer">
    <nav class="nav">
      <a href="/" class="nav-item">
        <i class="ph-house"></i>
        <span>Inicio</span>
      </a>
      <a href="/citas" class="nav-item">
        <i class="ph-calendar"></i>
        <span>Citas</span>
      </a>
      <a href="/mascotas" class="nav-item">
        <i class="ph-paw-print"></i>
        <span>Mascotas</span>
      </a>
      <a href="/perfil" class="nav-item">
        <i class="ph-user"></i>
        <span>Perfil</span>
      </a>
    </nav>
  
    <div class="copy">
      © {year} VetCare App 🐶🐱
    </div>
  </footer>
  
  <style>
    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #fff;
      border-top: 1px solid #eee;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.4rem 0;
      font-size: 0.8rem;
      z-index: 100;
    }
  
    .nav {
      display: flex;
      justify-content: space-around;
      width: 100%;
      max-width: 400px;
    }
  
    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #666;
      text-decoration: none;
      font-weight: 500;
    }
  
    .nav-item i {
      font-size: 1.3rem;
      margin-bottom: 0.1rem;
    }
  
    .nav-item:hover,
    .nav-item:active {
      color: #00bfa6;
    }
  
    .copy {
      margin-top: 0.2rem;
      color: #aaa;
      font-size: 0.7rem;
    }
  </style>
  