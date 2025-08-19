"use client"

import EmbeddedForm from "./EmbeddedForm"

export default function ContactFormEmbed() {
  // Replace this with your actual embed code
  const embedCode = `
    <!-- Example: Replace with your actual form embed code -->
    <iframe 
      src="https://your-form-provider.com/embed/form-id" 
      width="100%" 
      height="600" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0">
      Loading...
    </iframe>
  `

  // Alternative for script-based embeds:
  const scriptBasedEmbedCode = `
    <div id="form-container"></div>
    <script type="text/javascript">
      // Your form provider's script code goes here
      (function() {
        // Example script - replace with your actual code
        console.log('Form script loaded');
      })();
    </script>
  `

  return (
    <EmbeddedForm
      title="Contact Us"
      description="Fill out the form below and we'll get back to you within 24 hours."
      embedCode={embedCode}
      className="max-w-4xl mx-auto"
    />
  )
}
