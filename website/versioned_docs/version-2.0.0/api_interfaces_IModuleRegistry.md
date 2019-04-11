---
id: version-2.0.0-interfaces_IModuleRegistry
title: IModuleRegistry
original_id: interfaces_IModuleRegistry
---

<div class="contract-doc"><div class="contract"><h2 class="contract-header"><span class="contract-kind">interface</span> IModuleRegistry</h2><div class="source">Source: <a href="git+https://github.com/PolymathNetwork/polymath-core/blob/v1.4.0/contracts/interfaces/IModuleRegistry.sol" target="_blank">interfaces/IModuleRegistry.sol</a></div></div><div class="index"><h2>Index</h2><ul><li><a href="interfaces_IModuleRegistry.html#getModulesByType">getModulesByType</a></li><li><a href="interfaces_IModuleRegistry.html#getModulesByTypeAndToken">getModulesByTypeAndToken</a></li><li><a href="interfaces_IModuleRegistry.html#getReputationByFactory">getReputationByFactory</a></li><li><a href="interfaces_IModuleRegistry.html#getTagsByType">getTagsByType</a></li><li><a href="interfaces_IModuleRegistry.html#getTagsByTypeAndToken">getTagsByTypeAndToken</a></li><li><a href="interfaces_IModuleRegistry.html#isPaused">isPaused</a></li><li><a href="interfaces_IModuleRegistry.html#owner">owner</a></li><li><a href="interfaces_IModuleRegistry.html#registerModule">registerModule</a></li><li><a href="interfaces_IModuleRegistry.html#removeModule">removeModule</a></li><li><a href="interfaces_IModuleRegistry.html#updateFromRegistry">updateFromRegistry</a></li><li><a href="interfaces_IModuleRegistry.html#useModule">useModule</a></li><li><a href="interfaces_IModuleRegistry.html#verifyModule">verifyModule</a></li></ul></div><div class="reference"><h2>Reference</h2><div class="functions"><h3>Functions</h3><ul><li><div class="item function"><span id="getModulesByType" class="anchor-marker"></span><h4 class="name">getModulesByType</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>getModulesByType</strong><span>(uint8 _moduleType) </span><span>external </span><span>view </span><span>returns  (address[]) </span></code><hr/><div class="description"><p>Returns the list of addresses of Module Factory of a particular type.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_moduleType</code> - Type of Module</div></dd><dt><span class="label-return">Returns:</span></dt><dd>address array that contains the list of addresses of module factory contracts.</dd></dl></div></div></li><li><div class="item function"><span id="getModulesByTypeAndToken" class="anchor-marker"></span><h4 class="name">getModulesByTypeAndToken</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>getModulesByTypeAndToken</strong><span>(uint8 _moduleType, address _securityToken) </span><span>external </span><span>view </span><span>returns  (address[]) </span></code><hr/><div class="description"><p>Returns the list of available Module factory addresses of a particular type for a given token.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_moduleType</code> - is the module type to look for</div><div><code>_securityToken</code> - is the address of SecurityToken</div></dd><dt><span class="label-return">Returns:</span></dt><dd>address array that contains the list of available addresses of module factory contracts.</dd></dl></div></div></li><li><div class="item function"><span id="getReputationByFactory" class="anchor-marker"></span><h4 class="name">getReputationByFactory</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>getReputationByFactory</strong><span>(address _factoryAddress) </span><span>external </span><span>view </span><span>returns  (address[]) </span></code><hr/><div class="description"><p>Used to get the reputation of a Module Factory.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_factoryAddress</code> - address of the Module Factory</div></dd><dt><span class="label-return">Returns:</span></dt><dd>address array which has the list of securityToken&#x27;s uses that module factory</dd></dl></div></div></li><li><div class="item function"><span id="getTagsByType" class="anchor-marker"></span><h4 class="name">getTagsByType</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>getTagsByType</strong><span>(uint8 _moduleType) </span><span>external </span><span>view </span><span>returns  (bytes32[], address[]) </span></code><hr/><div class="description"><p>Returns all the tags related to the a module type which are valid for the given token.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_moduleType</code> - is the module type</div></dd><dt><span class="label-return">Returns:</span></dt><dd>corresponding list of module factories</dd></dl></div></div></li><li><div class="item function"><span id="getTagsByTypeAndToken" class="anchor-marker"></span><h4 class="name">getTagsByTypeAndToken</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>getTagsByTypeAndToken</strong><span>(uint8 _moduleType, address _securityToken) </span><span>external </span><span>view </span><span>returns  (bytes32[], address[]) </span></code><hr/><div class="description"><p>Returns all the tags related to the a module type which are valid for the given token.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_moduleType</code> - is the module type</div><div><code>_securityToken</code> - is the token</div></dd><dt><span class="label-return">Returns:</span></dt><dd>corresponding list of module factories</dd></dl></div></div></li><li><div class="item function"><span id="isPaused" class="anchor-marker"></span><h4 class="name">isPaused</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>isPaused</strong><span>() </span><span>external </span><span>view </span><span>returns  (bool) </span></code><hr/><div class="description"><p>Check whether the contract operations is paused or not.</p></div><dl><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li><li><div class="item function"><span id="owner" class="anchor-marker"></span><h4 class="name">owner</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>owner</strong><span>() </span><span>external </span><span>view </span><span>returns  (address) </span></code><hr/><div class="description"><p>Get the owner of the contract.</p></div><dl><dt><span class="label-return">Returns:</span></dt><dd>address owner</dd></dl></div></div></li><li><div class="item function"><span id="registerModule" class="anchor-marker"></span><h4 class="name">registerModule</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>registerModule</strong><span>(address _moduleFactory) </span><span>external </span></code><hr/><div class="description"><p>Called by the ModuleFactory owner to register new modules for SecurityToken to use.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_moduleFactory</code> - is the address of the module factory to be registered</div></dd></dl></div></div></li><li><div class="item function"><span id="removeModule" class="anchor-marker"></span><h4 class="name">removeModule</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>removeModule</strong><span>(address _moduleFactory) </span><span>external </span></code><hr/><div class="description"><p>Called by the ModuleFactory owner or registry curator to delete a ModuleFactory.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_moduleFactory</code> - is the address of the module factory to be deleted</div></dd></dl></div></div></li><li><div class="item function"><span id="updateFromRegistry" class="anchor-marker"></span><h4 class="name">updateFromRegistry</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>updateFromRegistry</strong><span>() </span><span>external </span></code><hr/><div class="description"><p>Use to get the latest contract address of the regstries.</p></div></div></div></li><li><div class="item function"><span id="useModule" class="anchor-marker"></span><h4 class="name">useModule</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>useModule</strong><span>(address _moduleFactory) </span><span>external </span></code><hr/><div class="description"><p>Called by a security token to notify the registry it is using a module.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_moduleFactory</code> - is the address of the relevant module factory</div></dd></dl></div></div></li><li><div class="item function"><span id="verifyModule" class="anchor-marker"></span><h4 class="name">verifyModule</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>verifyModule</strong><span>(address _moduleFactory, bool _verified) </span><span>external </span></code><hr/><div class="description"><p>(The only exception to this is that the author of the module is the owner of the ST - Only if enabled by the FeatureRegistry).</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_moduleFactory</code> - is the address of the module factory to be registered</div><div><code>_verified</code> - bool</div></dd></dl></div></div></li></ul></div></div></div>