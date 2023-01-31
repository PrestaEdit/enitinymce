<?php

class EniTinyMCE extends Module
{
    public function __construct()
    {
        $this->name = 'enitinymce';

        parent::__construct();
    }

    public function install()
    {
        parent::install() && $this->registerHook(['actionAdminControllerSetMedia']);

        return true;
    }

    public function hookActionAdminControllerSetMedia()
    {
        $this->context->controller->addJs($this->getPathUri().'views/js/demo.js');
    }
}