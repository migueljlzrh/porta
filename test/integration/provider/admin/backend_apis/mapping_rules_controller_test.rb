# frozen_string_literal: true

require 'test_helper'

class Provider::Admin::BackendApis::MappingRulesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @provider = FactoryBot.create(:provider_account)
    @service = @provider.first_service
    @backend_api = @service.backend_api

    FactoryBot.create(:proxy_rule, proxy: @service.proxy)

    login_provider @provider
  end

  attr_reader :provider, :service, :backend_api

  test '#index' do
    get provider_admin_backend_api_mapping_rules_path(backend_api)
    assert_response :success

    assert_select 'table.data tr', count: @backend_api.mapping_rules.count+1
    @backend_api.mapping_rules.each { |rule| assert_select 'table.data tr td', text: rule.pattern }
  end
end
