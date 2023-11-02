import React, { useState } from "react";
import ClienCardDropdown from "./ClienCardDropdown";

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
const ClientCard = ({ client }) => {
  return (
    <section className="client-card">
      <div>
        <div className="relative flex justify-between">
          <h3 className="">{client.name}</h3>
          <ClienCardDropdown />
        </div>
        <hr />
        <span className="text-sm italic">{client.businessType}</span>
        <div className="client-contact">
          <div className="contact-info-group">
            <PhoneIcon className="contact-icon me-4" />
            <p className="text-base">{client.phone}</p>
          </div>
          <div className="contact-info-group">
            <EnvelopeIcon className="contact-icon me-4" />
            <p className="text-base">{client.email}</p>
          </div>
          <div className="contact-info-group">
            <MapPinIcon className="contact-icon me-4" />
            <p className="text-base">{client.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCard;
