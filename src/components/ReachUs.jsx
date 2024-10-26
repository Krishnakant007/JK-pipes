const ReachUs = () => {
    return (
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.8306187092016!2d75.86109527522501!3d19.84711858152279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda572feacbb4bb%3A0x1816145364295a5c!2sJ.K.Pipes!5e0!3m2!1sen!2sin!4v1729767750170!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location of J.K. Pipes"
        />
      </div>
    );
  };
  
  export default ReachUs;
  