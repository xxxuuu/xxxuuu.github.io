import"./hoisted.CoLf1DwL.js";let d=!1;async function u(i){if(d){console.log("[Giscus] Already initialized");return}const{container:t,slug:o,config:r}=i;if(!r.repo||!r.repoId||!r.categoryId){console.error("[Giscus] ❌ Missing required configuration",{repo:r.repo,repoId:r.repoId,categoryId:r.categoryId}),l(t,"评论系统配置不完整，请联系站点管理员");return}try{await p(t,r,o),d=!0,console.log("[Giscus] ✅ Initialized successfully")}catch(s){console.error("[Giscus] ❌ Failed to initialize:",s),l(t,"评论加载失败，请刷新页面重试")}}async function p(i,t,o){return new Promise((r,s)=>{const c=document.querySelector("#giscus-script");c&&c.remove();const e=document.createElement("script");e.id="giscus-script",e.src="https://giscus.app/client.js",e.async=!0,e.defer=!0,e.setAttribute("data-repo",t.repo),e.setAttribute("data-repo-id",t.repoId),e.setAttribute("data-category",t.category),e.setAttribute("data-category-id",t.categoryId),e.setAttribute("data-mapping",t.mapping),e.setAttribute("data-strict",t.strict),e.setAttribute("data-reactions-enabled",t.reactionsEnabled),e.setAttribute("data-emit-metadata",t.emitMetadata),e.setAttribute("data-input-position",t.inputPosition),e.setAttribute("data-lang",t.lang),e.setAttribute("data-lazy",t.lazy.toString()),e.setAttribute("data-theme","preferred_color_scheme"),e.setAttribute("data-term",o),e.onload=()=>{const n=i.querySelector(".comments-loading");n&&n.remove(),r()},e.onerror=()=>{s(new Error("Failed to load Giscus script"))},i.appendChild(e)})}function l(i,t){i.innerHTML=`
    <div class="comments-error" style="
      padding: 1rem;
      text-align: center;
      color: var(--color-text-secondary, #666);
      border: 1px solid var(--color-border, #e0e0e0);
      border-radius: 0.5rem;
      background: var(--color-surface, #f5f5f5);
    ">
      <p style="margin: 0;">${t}</p>
      <p style="
        font-size: 0.85em;
        margin: 0.5em 0 0 0;
        color: var(--color-text-tertiary, #999);
      ">
        如果问题持续存在，请检查控制台获取更多信息
      </p>
    </div>
  `}const a=document.querySelector(".comments-container");if(a){const i=a.dataset.provider,t=a.dataset.giscusConfig;if(i==="giscus"&&t)try{const{slug:o,title:r,config:s}=JSON.parse(t);u({container:a,slug:o,title:r,config:s})}catch(o){console.error("[Comments] Failed to parse config:",o)}else i==="waline"?console.warn("Waline 评论系统暂未实现"):i==="utterances"&&console.warn("Utterances 评论系统暂未实现")}
