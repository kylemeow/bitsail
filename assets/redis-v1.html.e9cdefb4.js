import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as d,a as e,b as t,d as s,w as a,e as i,r}from"./app.c1da3360.js";const p={},c=e("h1",{id:"redis-v1-connector",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis-v1-connector","aria-hidden":"true"},"#"),t(" Redis-v1 connector")],-1),u=i(`<p><strong>BitSail</strong> Redis connector supports writing Redis. The main function points are as follows:</p><ul><li>Support batch write to Redis.</li><li>Support 4 kinds of data type in Redis.</li></ul><h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>connector-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis-writer" tabindex="-1"><a class="header-anchor" href="#redis-writer" aria-hidden="true">#</a> Redis writer</h2><h3 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h3><p>We support four kinds of data types in Redis:</p><ul><li><code>String, Set, Hash, Sorted Set</code>.</li></ul><p>Each data type has its own requirement for input data:</p><table><thead><tr><th>Data type</th><th>Required column numbers</th><th>1st column</th><th>2nd column</th><th>3rd column</th></tr></thead><tbody><tr><td>String</td><td>2</td><td>key</td><td>value</td><td></td></tr><tr><td>Set</td><td>2</td><td>key of set</td><td>value to insert into set</td><td></td></tr><tr><td>Hash</td><td>3</td><td>key of hash</td><td>key to insert to hash</td><td>value to insert to hash</td></tr><tr><td>Sorted Set (Zset)</td><td>3</td><td>key of Sorted set</td><td>score</td><td>value to insert to set</td></tr></tbody></table><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>The following mentioned parameters should be added to <code>job.writer</code> block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.redis.sink.RedisSink&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;redis_data_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hash&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;redis_host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;redis_port&quot;</span><span class="token operator">:</span> <span class="token number">6379</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Class name of redis writer, <code>com.bytedance.bitsail.connector.legacy.redis.sink.RedisOutputFormat</code></td></tr><tr><td style="text-align:left;">redis_host</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">host of redis</td></tr><tr><td style="text-align:left;">redis_port</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">port of redis</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Describing fields&#39; name and type, type can be <code>binary</code> or <code>string</code> or other basic types. The <code>binary</code> type is <code>byte[]</code>.</td></tr></tbody></table><h4 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">writer_parallelism_num</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Writer parallelism num</td></tr><tr><td style="text-align:left;">client_timeout_ms</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Timeout of redis connection. Default 60000 ms</td></tr><tr><td style="text-align:left;">ttl</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Ttl of inserted data. Default -1 means not setting ttl</td></tr><tr><td style="text-align:left;">ttl_type</td><td style="text-align:left;">No</td><td style="text-align:left;">&quot;DAY&quot;, &quot;HOUR&quot;, &quot;MINUTE&quot;, &quot;SECOND&quot;</td><td style="text-align:left;">Time unit of ttl. Default &quot;DAY&quot;</td></tr><tr><td style="text-align:left;">write_batch_interval</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Redis instruction write batch size. Default 50</td></tr><tr><td style="text-align:left;">redis_data_type</td><td style="text-align:left;">No</td><td style="text-align:left;">&quot;string&quot;<br>&quot;set&quot;<br>&quot;hash&quot;<br>&quot;sorted_set&quot;<br>&quot;mhash&quot;</td><td style="text-align:left;">Data type to insert. Default &quot;string&quot;</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Password of redis</td></tr><tr><td style="text-align:left;">connection_pool_max_total</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Jedis pool max total connection</td></tr><tr><td style="text-align:left;">connection_pool_max_idle</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">jedis pool max idle connection</td></tr><tr><td style="text-align:left;">connection_pool_min_idle</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Jedis pool min idle connection</td></tr><tr><td style="text-align:left;">connection_pool_max_wait_time_ms</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Jedis pool max wait time in millis</td></tr><tr><td style="text-align:left;">max_attempt_count</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Retryer retry count</td></tr></tbody></table><h2 id="related-documents" tabindex="-1"><a class="header-anchor" href="#related-documents" aria-hidden="true">#</a> Related documents</h2>`,18);function y(g,f){const n=r("RouterLink");return o(),d("div",null,[c,e("p",null,[t("Parent document: "),s(n,{to:"/en/documents/connectors/"},{default:a(()=>[t("Connectors")]),_:1})]),u,e("p",null,[t("Configuration examples: "),s(n,{to:"/en/documents/connectors/redis/v1/redis-v1-example.html"},{default:a(()=>[t("Redis-v1 connector example")]),_:1})])])}const x=l(p,[["render",y],["__file","redis-v1.html.vue"]]);export{x as default};