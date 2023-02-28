import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as i,a as e,b as t,d as s,w as n,e as o,r}from"./app.419631c0.js";const c={},p=e("h1",{id:"rocketmq-connector",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rocketmq-connector","aria-hidden":"true"},"#"),t(" RocketMQ connector")],-1),u=o(`<p><strong>BitSail</strong> RocketMQ connector supports writing in batch mode.</p><h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-connector-rocketmq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rocketmq-writer" tabindex="-1"><a class="header-anchor" href="#rocketmq-writer" aria-hidden="true">#</a> RocketMQ writer</h2><h3 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h3><ul><li>int, bigint</li><li>float, double, decimal</li><li>timestamp, date</li><li>string, char</li><li>boolean</li><li>binary</li></ul><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>The following mentioned parameters should be added to <code>job.writer</code> block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.rocketmq.sink.RocketMQOutputFormat&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name_server_address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:9876&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;producer_group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_producer_group&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;topic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_topic&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Class name of RocketMQ writer, <code>com.bytedance.bitsail.connector.legacy.rocketmq.sink.RocketMQOutputFormat</code></td></tr><tr><td style="text-align:left;">name_server_address</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Name server address of rocketmq</td></tr><tr><td style="text-align:left;">topic</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Topic to write</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Describing fields&#39; names and types</td></tr></tbody></table><h4 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">writer_parallelism_num</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Writer parallelism num</td></tr><tr><td style="text-align:left;">producer_group</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Producer group for the task. If not defined, it will use a random string</td></tr><tr><td style="text-align:left;">tag</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Tags of the produced messages</td></tr><tr><td style="text-align:left;">enable_batch_flush</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">true: send a batch of messages at once;<br>false: send single message at once.<br> Default true.</td></tr><tr><td style="text-align:left;">batch_size</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">The number of messages to send in a batch. Default 100</td></tr><tr><td style="text-align:left;">log_failures_only</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">When send failure happens, it will:<br>true: only log this failure,<br>false: throw exception.<br>Default false.</td></tr><tr><td style="text-align:left;">enable_sync_send</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">If use sync send. Default false.</td></tr><tr><td style="text-align:left;">access_key</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Access key for authorization.</td></tr><tr><td style="text-align:left;">secret_key</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Secret key for authorization.</td></tr><tr><td style="text-align:left;">send_failure_retry_times</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Max retry times for a send failure, default 3</td></tr><tr><td style="text-align:left;">send_message_timeout_ms</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Timeout for sending a message, default 3000 ms</td></tr><tr><td style="text-align:left;">max_message_size_bytes</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Max message size, default 4194304 bytes</td></tr><tr><td style="text-align:left;">key</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Specify which field(s) is used as the message key.</td></tr><tr><td style="text-align:left;">partition_fields</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Specify which field(s) is used to select queue.</td></tr></tbody></table><h2 id="related-documents" tabindex="-1"><a class="header-anchor" href="#related-documents" aria-hidden="true">#</a> Related documents</h2>`,14);function g(f,y){const a=r("RouterLink");return d(),i("div",null,[p,e("p",null,[t("Parent document: "),s(a,{to:"/en/documents/connectors/"},{default:n(()=>[t("Connectors")]),_:1})]),u,e("p",null,[t("Configuration examples: "),s(a,{to:"/en/documents/connectors/rocketmq/rocketmq-example.html"},{default:n(()=>[t("RocketMQ connector example")]),_:1})])])}const h=l(c,[["render",g],["__file","rocketmq.html.vue"]]);export{h as default};