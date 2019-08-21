---
id: version-2.1.0-version-2.1.0-modules_Module
title: Module
original_id: version-2.1.0-modules_Module
---

<div class="contract-doc"><div class="contract"><h2 class="contract-header"><span class="contract-kind">contract</span> Module</h2><p class="base-contracts"><span>is</span> <a href="interfaces_IModule.html">IModule</a><span>, </span><a href="modules_ModuleStorage.html">ModuleStorage</a></p><p class="description">Contract is abstract.</p><div class="source">Source: <a href="https://github.com/PolymathNetwork/polymath-core/blob/v2.1.0/contracts/modules/Module.sol" target="_blank">contracts/modules/Module.sol</a></div></div><div class="index"><h2>Index</h2><ul><li><a href="modules_Module.html#">fallback</a></li><li><a href="modules_Module.html#onlyFactory">onlyFactory</a></li><li><a href="modules_Module.html#onlyFactoryOrOwner">onlyFactoryOrOwner</a></li><li><a href="modules_Module.html#onlyFactoryOwner">onlyFactoryOwner</a></li><li><a href="modules_Module.html#onlyOwner">onlyOwner</a></li><li><a href="modules_Module.html#takeFee">takeFee</a></li><li><a href="modules_Module.html#withPerm">withPerm</a></li></ul></div><div class="reference"><h2>Reference</h2><div class="modifiers"><h3>Modifiers</h3><ul><li><div class="item modifier"><span id="onlyFactory" class="anchor-marker"></span><h4 class="name">onlyFactory</h4><div class="body"><code class="signature">modifier <strong>onlyFactory</strong><span>() </span></code><hr/></div></div></li><li><div class="item modifier"><span id="onlyFactoryOrOwner" class="anchor-marker"></span><h4 class="name">onlyFactoryOrOwner</h4><div class="body"><code class="signature">modifier <strong>onlyFactoryOrOwner</strong><span>() </span></code><hr/></div></div></li><li><div class="item modifier"><span id="onlyFactoryOwner" class="anchor-marker"></span><h4 class="name">onlyFactoryOwner</h4><div class="body"><code class="signature">modifier <strong>onlyFactoryOwner</strong><span>() </span></code><hr/></div></div></li><li><div class="item modifier"><span id="onlyOwner" class="anchor-marker"></span><h4 class="name">onlyOwner</h4><div class="body"><code class="signature">modifier <strong>onlyOwner</strong><span>() </span></code><hr/></div></div></li><li><div class="item modifier"><span id="withPerm" class="anchor-marker"></span><h4 class="name">withPerm</h4><div class="body"><code class="signature">modifier <strong>withPerm</strong><span>(bytes32 _perm) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_perm</code> - bytes32</div></dd></dl></div></div></li></ul></div><div class="functions"><h3>Functions</h3><ul><li><div class="item function"><span id="fallback" class="anchor-marker"></span><h4 class="name">fallback</h4><div class="body"><code class="signature">function <strong></strong><span>(address _securityToken, address _polyAddress) </span><span>public </span></code><hr/><div class="description"><p>Constructor.</p></div><dl><dt><span class="label-modifiers">Modifiers:</span></dt><dd></dd><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_securityToken</code> - Address of the security token</div><div><code>_polyAddress</code> - Address of the polytoken</div></dd></dl></div></div></li><li><div class="item function"><span id="takeFee" class="anchor-marker"></span><h4 class="name">takeFee</h4><div class="body"><code class="signature">function <strong>takeFee</strong><span>(uint256 _amount) </span><span>public </span><span>returns  (bool) </span></code><hr/><div class="description"><p>Used to withdraw the fee by the factory owner.</p></div><dl><dt><span class="label-modifiers">Modifiers:</span></dt><dd><a href="modules_Module.html#withPerm">withPerm </a></dd><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_amount</code> - uint256</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li></ul></div></div></div>