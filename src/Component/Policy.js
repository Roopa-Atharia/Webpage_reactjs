import React from "react";
import '../Css/PolicyStyle.css';

const Policy=()=>{
    return(
        <>
<h1> Privacy Policy</h1>
<div className="policy">
    <ol>
        <li>Identifying information: Establish whom the privacy policy represents, including the name of your company, the website URL, and business address.</li>
        <li>Details of data you collect: Describe what types of data you collect from your website visitors, such as their names, addresses, email addresses, social media account handles, credit card information, and IP address. Any and all personal data the site collects should be included in the policy in clear terms.</li>
        <li>How data is stored and protected: Privacy policy laws require companies to protect their customers’ data. Therefore, you should ensure that your storage measures safeguard customers’ data from being leaked, stolen, or accessed by unauthorized parties. Computer safeguards, passwords, firewalls, data encryption, and secured access are all examples of good data protection.</li>
        <li>Third parties: If your visitors’ data is going to be shared with any third parties, such as marketing agencies, then you must specify who these parties are and how they will access, store, and handle the data.</li>
        <li>The reason for collecting data: What is the purpose for collecting your site visitors’ data? Do you use it for marketing purposes, to improve site performance, or something else? Make sure you provide a valid reason for storing anyone’s personal information.</li>
        <li>Methods of data collection: Your website privacy policy must include your methods of online data collection, including tracking cookies, surveys, mailing lists, and order placement.</li>
        <li>Opt-out clauses: You should always provide users with the ability to request a copy of their data, opt out of data collection, and remove any of their data from your website’s archive.</li>
    </ol>
</div>
        </>
    )
}
export default Policy;