import React, { useState } from 'react';
import { Text } from '../components/Text';
import { RadioButton } from '../components/RadioButton';
import { Button } from '../components/Button';
import { Img } from '../components/Img';

const Contact = () => {
  const [selectedEmail, setSelectedEmail] = useState('lfriesen8@rrc.ca');
  const [messageSent, setMessageSent] = useState(false);

  const handleSend = () => {
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 4000);
  };

  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(to right, #f0f0f0, #e2e2e2)',
        padding: '2rem',
        borderRadius: '10px',
        marginTop: '3rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {/* LEFT: Contact Form */}
        <div style={{ flex: '1 1 50%' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
            Contact Me
          </h2>
          <Text>Name: Liam Friesen</Text>
          <Text>Phone: 204-250-7719</Text>
          <Text>Choose the email you&apos;d like to reach me at:</Text>

          <div style={{ marginTop: '1rem' }}>
            <RadioButton
              label="lfriesen8@rrc.ca"
              name="email"
              value="lfriesen8@rrc.ca"
              checked={selectedEmail === 'lfriesen8@rrc.ca'}
              onChange={setSelectedEmail}
            />
            <RadioButton
              label="thefensta@gmail.com"
              name="email"
              value="thefensta@gmail.com"
              checked={selectedEmail === 'thefensta@gmail.com'}
              onChange={setSelectedEmail}
            />
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <Button
              label="Send Chat Request to Liam"
              onClick={handleSend}
              primary
            />
          </div>

          {messageSent && (
            <p
              style={{ marginTop: '1rem', color: 'green', fontWeight: 'bold' }}
            >
              Your message has been sent. Liam will contact you soon!
            </p>
          )}
        </div>

        {/* RIGHT: Image */}
        <div
          style={{ flex: '1 1 45%', textAlign: 'center', marginTop: '1rem' }}
        >
          <Img
            src="https://png.pngtree.com/png-vector/20191011/ourmid/pngtree-phone-icon-png-image_1817554.jpg"
            alt="Support"
            width={200}
            height={200}
            borderRadius="12px"
          />
          <p>
            {' '}
            I will get back to you as soon as I can! Thank you for stopping by,
            -Liam
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
